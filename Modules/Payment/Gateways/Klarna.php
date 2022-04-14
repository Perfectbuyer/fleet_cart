<?php

namespace Modules\Payment\Gateways;

use Stripe\PaymentIntent;
use Illuminate\Http\Request;
use Modules\Order\Entities\Order;
use Modules\Order\Entities\OrderProduct;
use Modules\Payment\GatewayInterface;
use Omnipay\Omnipay;

class Klarna implements GatewayInterface
{
    public $label;
    public $description;

    public function __construct()
    {
        $this->label = setting('klarna_label');
        $this->description = setting('klarna_description');

        //\Stripe\Stripe::setApiKey(setting('stripe_secret_key'));
    }

    public function purchase(Order $order, Request $request)
    {
        $products=OrderProduct::where("order_id",$order->id)->get();
    
        //return $order->total->amount;
        //Klarna Payment
        $gateway = Omnipay::create('\MyOnlineStore\Omnipay\KlarnaCheckout\Gateway');

        $gateway->initialize([
            'username' =>setting('klarna_username'),
            'secret' => setting('klarna_secret_key'),
            'testMode' => false // Optional, default: true
        ]);
        $base_url='https://ejimm.de';
        $data = [
            'amount' => $order->total->amount,
            'tax_amount' =>0,
            'currency' => 'EUR',
            'locale' => 'DE',
            'purchase_country' => 'DE',

            'notify_url' => 'https://itrk.legal/hS8.5P.e89.html',
            'return_url' => $base_url.'/checkout/'.$order->id.'/complete/klarna',
            'terms_url' => 'https://itrk.legal/hS8.5P.e89.html',
            'validation_url' => $base_url.'/checkout/'.$order->id.'/complete/klarna',
        ];

        foreach ($products as $key => $value) {
            $data["items"][]=[
                'type' => 'physical',
                'name' => $value->product->name,
                'quantity' => $value->qty,
                'tax_rate' => 0,
                'price' =>$value->line_total->amount ,
                'unit_price' => $value->unit_price->amount,
                'total_tax_amount' =>0,
            ];
        }


        $response = $gateway->authorize($data)->send()->getData();

        Order::where("id",$order->id)->update(["pay_id"=>$response["order_id"]]);
        return $response["html_snippet"];


    }

    public function complete(Order $order)
    {
        return true;
        
        $gateway = Omnipay::create('\MyOnlineStore\Omnipay\KlarnaCheckout\Gateway');
        $response = $gateway->fetchTransaction(['transactionReference' => $order->pay_id])->send();

        if($response->isSuccessful()){
        }else{
            return false;
        }
    }
}
