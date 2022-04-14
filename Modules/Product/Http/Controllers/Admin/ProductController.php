<?php

namespace Modules\Product\Http\Controllers\Admin;

use Modules\Product\Entities\Product;
use Modules\Admin\Traits\HasCrudActions;
use Modules\Product\Http\Requests\SaveProductRequest;

class ProductController
{
    use HasCrudActions;

    /**
     * Model for the resource.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Label of the resource.
     *
     * @var string
     */
    protected $label = 'product::products.product';

    /**
     * View path of the resource.
     *
     * @var string
     */
    protected $viewPath = 'product::admin.products';

    /**
     * Form requests for the resource.
     *
     * @var array|string
     */
    protected $validation = SaveProductRequest::class;

    public function downloadCsvFile()
    {
        $headers = array(
            "Content-type" => "text/csv",
            "Content-Disposition" => "attachment; filename=file.csv",
            "Pragma" => "no-cache",
            "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
            "Expires" => "0"
        );
        $callback = function()
        {
            $file = fopen('php://output', 'w');
            fputcsv($file, ['sku','brand','title','categoryPath','url','eans','description','price','paymentCosts_paypal','deliveryCosts_dhl','deliveryTime']);
            Product::chunk(100, function($products) use ($file)
            {
                foreach ($products as $product)
                {
                    fputcsv($file, array_values(self::setDataForCsv($product)));
                }
            });
            fclose($file);
        };
        return response()->stream($callback, 200, $headers);
    }

    public function setDataForCsv($product)
    {
        return [
            'sku'=>$product->sku,
            'brand'=>($product->brand) ? $product->brand->name : '',
            'title'=>$product->name,
            'categoryPath'=>($product->categories) ? implode(' & ',$product->categories->pluck('name')->toArray()) : '',
            'url'=>url("/products/{$product->slug}"),
            'eans'=>$product->sku,
            'description'=>$product->description,
            'price' => ($product->price) ? $product->price->toArray()['amount']:0,
            'paymentCosts_paypal'=>0,
            'deliveryCosts_dhl'=>0,
            'deliveryTime'=>'Delivered in 2-3 working days',
        ];
    }
}
