<?php

namespace Modules\Import\Http\Controllers\Admin;

use Maatwebsite\Excel\Excel;
use Modules\Import\Imports\ProductImport;
use Maatwebsite\Excel\Facades\Excel as ExcelFacade;
use Modules\Import\Http\Requests\StoreImporterRequest;
use Modules\Product\Entities\Product;
use Modules\Brand\Entities\Brand;
class ImporterController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('import::admin.importer.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Modules\Import\Http\Requests\StoreImporterRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreImporterRequest $request)
    {
    
        @set_time_limit(0);
        $importers = ['product' => ProductImport::class];
        // echo "ddffd"; die();
        ExcelFacade::import(new $importers[$request->import_type], $request->file('csv_file'), null, Excel::CSV);

        if (session()->has('importer_errors')) {
            return back()->with('error', trans('import::messages.there_was_an_error_on_rows', [
                'rows' => implode(', ', session()->pull('importer_errors', [])),
            ]));
        }

        return back()->with('success', trans('import::messages.the_importer_has_been_run_successfully'));
    }

    public function createFeed(){
    //   echo "string";die;
        $products=Product::all();
        $path = public_path('product/');

        $fileName = 'feed.csv';

        $file = fopen($path.$fileName, 'w');

        $columns = array('id', 'title',"description","availability","condition","price","link","image_link","brand");

        fputcsv($file, $columns);
        foreach ($products as $key => $item) {
            return $item;
            if($item->id!="" && $item->name!="" && $item->selling_price->amount!="" && $item->selling_price->currency!="" && $item->slug!="" && $item->base_image->path!=""){
                //$brand=Brand::where("")
                $data= [
                    "id"=>$item->id,
                    "title"=>ucfirst($item->name),
                    "description"=>ucfirst($item->description),
                    "availability"=>"in stock",
                    "condition"=>"new",
                    "price"=>$item->selling_price->amount." ".$item->selling_price->currency,
                    "link"=>url('products/'.$item->slug),
                    "image_link"=>$item->base_image->path,
                    "brand"=>"Ejimm",
                ];
            }
        fputcsv($file, $data);
        }
        fclose($file);

        return $data;

        return  "Done";

    }
}
