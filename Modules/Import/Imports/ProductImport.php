<?php

namespace Modules\Import\Imports;

use Maatwebsite\Excel\Row;
use Modules\Product\Entities\Product;
use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
use Illuminate\Http\File AS FileExt;
use Modules\Media\Entities\File;
use Modules\Brand\Entities\Brand;
use Modules\Category\Entities\Category;

class ProductImport implements WithChunkReading, WithHeadingRow, ToCollection
{
    public function chunkSize(): int
    {
        return 500;
    }

    public function collection(Collection $rows)
    {
        foreach ($rows as $row)
        {

            $data = $this->normalize($row->toArray());
            request()->merge($data);
            $product = Product::where('sku',$data['sku'])->first();
            try {
                if (!isset($product) || empty($product))
                {
                    $Product =  Product::create($data);
                    echo "Product Created With {$data["sku"]} : Time (".date('Y-m-d H:i:s').")<br>";
                } else {
                    $Product =  $product->update($data);
                    echo "Product Updated With {$data["sku"]} : Time (".date('Y-m-d H:i:s').")<br>";
                }
            } catch (\Throwable $th) {
                session()->push('importer_errors', $row->getIndex());
            }
        }
    }



    private function normalize(array $data)
    {
        return array_filter([
            'name' => $data['brand'].' '.$data['name'],
            'sku' => $data['ean'],
            'description' => $data['brand'].' '.$data['description_flat'],
            'short_description' => $data['brand'].' '.$data['description_flat'],
            'is_active' => 1,
            'brand_id' => $this->getBrand($data['brand']),
            'categories' => $this->getAllCategories($data),
            'tax_class_id' => 1,
            'supplier_product_id'=>$data['sku'],
            'price' => $this->getPrice($data),
            'manage_stock' => 1,
            'qty' => $data['stock'],
            'in_stock' => ($data['stock'] > 0) ? 1 :0,
            'files' => $this->getImages($data)
        ], function ($value) {
            return $value || is_numeric($value);
        });
    }

    public function getImages($data)
    {
        $media = [];
        $base = false;
        foreach ($data as $key => $value) {

            if (!stristr($key,'image') && !stristr($key,'video')) continue;

            if (empty($value)) continue;

            $fileId = $this->getFile($value);

            if (isset($fileId) && !empty($fileId)) {
                if (!$base) {
                    $media['base_image'] = $fileId->id;
                    $base = true;
                }else {
                    $media['additional_images'][] = $fileId->id;
                }
            }
        }
        return $media;
    }

    private function getFile($url)
    {

        try {
            ini_set('memory_limit', '-1');
            $productFile = file_get_contents($url);
            $pathInfo = pathinfo($url);
            $uploadUrl = public_path('uploads/'.$pathInfo['basename']);
            file_put_contents($uploadUrl,$productFile);
            $file = new FileExt($uploadUrl);
            $path = Storage::putFile('media', $file);
            return File::create([
                'user_id' => 1,
                'disk' => config('filesystems.default'),
                'filename' => $file->getFilename(),
                'path' => $path,
                'extension' => $file->getExtension() ?? '',
                'mime' => $file->getMimetype(),
                'size' => $file->getSize(),
            ]);
        } catch (\Throwable $th) {
            return false;
        }
    }

    private function getPrice($productData)
    {
        $consumer_price = $productData['consumer_price'];
        if ($productData['shipping_size'] == 'S') {
            $consumer_price = $productData['consumer_price'] + 4;
        } elseif ($productData['shipping_size'] == 'M') {
            $consumer_price = $productData['consumer_price'] + 10; //31%
        } elseif ($productData['shipping_size'] == 'L') {
            $consumer_price = $productData['consumer_price'] + 15; //32%
        } elseif ($productData['shipping_size'] == 'XS') {
            $consumer_price = $productData['consumer_price'] + 4;
        } elseif ($productData['shipping_size'] == 'XL') {
            $consumer_price = $productData['consumer_price'] + 15;
        } elseif ($productData['shipping_size'] == 'XXL') {
            $consumer_price = $productData['consumer_price'] + 35;
        }
        return $consumer_price;
    }

    private function getAllCategories($productData)
    {
        $allCategories = $categories = $oneCategories = $subCategories = [];
        $mainCategory = $this->getCategories(basename($_FILES['csv_file']['name'],'.csv'));
        if (isset($productData['category']) && !empty($productData['category'])) {
            if (isset($mainCategory) && !empty($mainCategory)) {
                $oneCategories = $this->getCategories($productData['category'],$mainCategory[0]);
            }else {
                $oneCategories = $this->getCategories($productData['category']);
            }
        }
        if (isset($productData['subcategory']) && !empty($productData['subcategory'])) {
            if (isset($oneCategories) && !empty($oneCategories)) {
                $subCategories = $this->getCategories($productData['subcategory'],$oneCategories[0]);
            }else{
                if (isset($mainCategory) && !empty($mainCategory)) {
                    $oneCategories = $this->getCategories($productData['subcategory'],$mainCategory[0]);
                }else {
                    $oneCategories = $this->getCategories($productData['subcategory']);
                }
            }
        }
        $categories = array_merge($categories,array_merge($oneCategories,$subCategories));
        $allCategories = array_unique($categories);
        return $allCategories;
    }

    private function getCategories($catName,$parentId=null){
        $categories = [];
        $category = Category::select('categories.*')
                    ->leftJoin('category_translations', function($join) {
                        $join->on('categories.id', '=', 'category_translations.category_id');
                    })
                    ->where('category_translations.name',$catName)
                    ->where('parent_id',$parentId)
                    ->first();
        if (!isset($category) || empty($category)) {
            try {
                $category =  Category::create(['name'=>$catName,'is_active'=>1,'is_searchable'=>false,'parent_id'=>$parentId]);
            } catch (\Throwable $th) {
                return $categories;
                echo "<pre>";
                print_r(['name'=>$catName,'is_active'=>1,'is_searchable'=>false,'parent_id'=>$parentId]);
                dd($th->getMessage());
            }
        }
        $categories[] = $category->id;
        if ($category->parent_id) {
            while (true) {

                if ($category->parent_id == null) break;

                $category = Category::find($category->parent_id);

                if (!isset($category) || empty($category)) break;

                $categories[] = $category->id;
            }
        }
        return $categories;
    }

    private function getBrand($brandName)
    {
        $brand = Brand::select('brands.*')
                ->leftJoin('brand_translations', function($join) {
                    $join->on('brands.id', '=', 'brand_translations.brand_id');
                })
                ->where('brand_translations.name',$brandName)
                ->first();
        if (!isset($brand) || empty($brand)) {
            try {
                $brand = Brand::create(['name'=>$brandName,'is_active'=>1]);
            } catch (\Throwable $th) {
                return false;
            }
        }
        return $brand->id;
    }

    private function normalizeOld(array $data)
    {
        return array_filter([
            'name' => $data['name'],
            'sku' => $data['sku'],
            'description' => $data['description'],
            'short_description' => $data['short_description'],
            'is_active' => $data['active'],
            'brand_id' => $data['brand'],
            'categories' => $this->explode($data['categories']),
            'tax_class_id' => $data['tax_class'],
            'tags' => $this->explode($data['tags']),
            'price' => $data['price'],
            'special_price' => $data['special_price'],
            'special_price_type' => $data['special_price_type'],
            'special_price_start' => $data['special_price_start'],
            'special_price_end' => $data['special_price_end'],
            'manage_stock' => $data['manage_stock'],
            'qty' => $data['quantity'],
            'in_stock' => $data['in_stock'],
            'new_from' => $data['new_from'],
            'new_to' => $data['new_to'],
            'up_sells' => $this->explode($data['up_sells']),
            'cross_sells' => $this->explode($data['cross_sells']),
            'related_products' => $this->explode($data['related_products']),
            'files' => $this->normalizeFiles($data),
            'meta' => $this->normalizeMetaData($data),
            'attributes' => $this->normalizeAttributes($data),
            'options' => $this->normalizeOptions($data),
        ], function ($value) {
            return $value || is_numeric($value);
        });
    }

    private function explode($values)
    {
        if (trim($values) == '') {
            return false;
        }

        return array_map('trim', explode(',', $values));
    }

    private function normalizeFiles(array $data)
    {
        return [
            'base_image' => $data['base_image'],
            'additional_images' => $this->explode($data['additional_images']),
        ];
    }

    private function normalizeMetaData($data)
    {
        return [
            'meta_title' => $data['meta_title'],
            'meta_description' => $data['meta_description'],
        ];
    }

    private function normalizeAttributes(array $data)
    {
        $attributes = [];

        foreach ($this->findAttributes($data) as $attributeNumber => $attributeId) {
            $attributes[] = [
                'attribute_id' => $attributeId,
                'values' => $this->findAttributeValues($data, $attributeNumber),
            ];
        }

        return $attributes;
    }

    private function findAttributes(array $data)
    {
        return collect($data)->filter(function ($value, $column) {
            preg_match('/^attribute_\d$/', $column, $matches);

            return ! empty($matches);
        })->filter();
    }

    private function findAttributeValues(array $data, $attributeNumber)
    {
        return collect($data)->filter(function ($value, $column) use ($attributeNumber) {
            return $column === "{$attributeNumber}_values";
        })->map(function ($values) {
            return $this->explode($values);
        })->flatten()->toArray();
    }

    private function normalizeOptions(array $data)
    {
        $options = [];

        foreach ($this->findOptionPrefixes($data) as $optionPrefix) {
            $option = $this->findOptionAttributes($data, $optionPrefix);

            if (is_null($option['name'])) {
                continue;
            }

            $options[] = [
                'name' => $option['name'],
                'type' => $option['type'],
                'is_required' => $option['is_required'],
                'values' => $this->findOptionValues($option),
            ];
        }

        return $options;
    }

    private function findOptionPrefixes(array $data)
    {
        return collect($data)->filter(function ($value, $column) {
            preg_match('/^option_\d_name$/', $column, $matches);

            return ! empty($matches);
        })->keys()->map(function ($column) {
            return str_replace('_name', '', $column);
        });
    }

    private function findOptionAttributes(array $data, $optionPrefix)
    {
        return collect($data)->filter(function ($value, $column) use ($optionPrefix) {
            preg_match("/{$optionPrefix}_.*/", $column, $matches);

            return ! empty($matches);
        })->mapWithKeys(function ($value, $column) use ($optionPrefix) {
            $column = str_replace("{$optionPrefix}_", '', $column);

            return [$column => $value];
        });
    }

    private function findOptionValues(Collection $option)
    {
        $values = [];

        foreach ($this->findOptionValuePrefixes($option) as $valuePrefix) {
            $value = $this->findOptionValueAttributes($option, $valuePrefix);

            if (is_null($value['label'])) {
                continue;
            }

            $values[] = [
                'label' => $value['label'],
                'price' => $value['price'],
                'price_type' => $value['price_type'],
            ];
        }

        return $values;
    }

    private function findOptionValuePrefixes(Collection $option)
    {
        return $option->filter(function ($value, $column) {
            preg_match('/value_\d_.+/', $column, $matches);

            return ! empty($matches);
        })->keys()->map(function ($column) {
            preg_match('/value_\d/', $column, $matches);

            return $matches[0];
        })->unique();
    }

    private function findOptionValueAttributes(Collection $option, $valuePrefix)
    {
        return $option->filter(function ($value, $column) use ($valuePrefix) {
            preg_match("/{$valuePrefix}_.*/", $column, $matches);

            return ! empty($matches);
        })->mapWithKeys(function ($value, $column) use ($valuePrefix) {
            $column = str_replace("{$valuePrefix}_", '', $column);

            return [$column => $value];
        })->toArray();
    }
}
