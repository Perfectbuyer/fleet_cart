<?php

namespace Modules\Order\Http\Controllers\Admin;

use Modules\Order\Entities\Order;
use Modules\Admin\Traits\HasCrudActions;
use Illuminate\Http\Request;

class OrderController
{
    use HasCrudActions;

    /**
     * Model for the resource.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['products', 'coupon', 'taxes'];

    /**
     * Label of the resource.
     *
     * @var string
     */
    protected $label = 'order::orders.order';

    /**
     * View path of the resource.
     *
     * @var string
     */
    protected $viewPath = 'order::admin.orders';


    public function shippingStore(Request $request){
        $request->validate([
            "tracking_number"=>"required",
            "shipper"=>"required"
        ],[
            "tracking_number.required"=>"Tracking Number Require*",
            "shipper.required"=>"Please Select Shipper*"
        ]);
        Order::where("id",$request->order_id)->update(["shipping_service"=>$request->shipper,"shipping_number"=>$request->tracking_number]);
        
    }
}
