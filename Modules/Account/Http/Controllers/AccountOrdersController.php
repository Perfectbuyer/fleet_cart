<?php

namespace Modules\Account\Http\Controllers;
use Illuminate\Support\Facades\Http;
class AccountOrdersController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = auth()->user()
            ->orders()
            ->latest()
            ->paginate(20);

        return view('public.account.orders.index', compact('orders'));
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = auth()->user()
            ->orders()
            ->with(['products', 'coupon', 'taxes'])
            ->where('id', $id)
            ->firstOrFail();

        $tracking="";
        if($order->shipping_number!=""){
            if($order->shipping_service=="dhl"){
                $response = Http::withHeaders([
                    'DHL-API-Key' => 'vt2Avs8U3PiAG0qAevxQ3FyCy8ezvr92',
                ])->get('https://api-eu.dhl.com/track/shipments?trackingNumber='.$order->shipping_number.'&service=parcel-de');
                $tracking=json_decode($response->body(),true);
            }
        }
        return view('public.account.orders.show', compact('order','tracking'));
    }
}
