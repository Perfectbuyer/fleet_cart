<div class="address-information-wrapper">
    <h3 class="section-title">{{ trans('order::orders.address_information') }}</h3>

    <div class="row">
        <div class="col-md-6">
            <div class="billing-address">
                <h4 class="pull-left">{{ trans('order::orders.billing_address') }}</h4>

                <span>
                    {{ $order->billing_full_name }}
                    <br>
                    {{ $order->billing_address_1 }}
                    <br>

                    @if ($order->billing_address_2)
                        {{ $order->billing_address_2 }}
                        <br>
                    @endif

                    {{ $order->billing_city }}, {{ $order->billing_state_name }} {{ $order->billing_zip }}
                    <br>
                    {{ $order->billing_country_name }}
                </span>
            </div>
        </div>

        <div class="col-md-6">
            <div class="shipping-address">
                <h4 class="pull-left">{{ trans('order::orders.shipping_address') }}</h4>

                <span>
                    {{ $order->shipping_full_name }}
                    <br>
                    {{ $order->shipping_address_1 }}
                    <br>

                    @if ($order->shipping_address_2)
                        {{ $order->shipping_address_2 }}
                        <br>
                    @endif

                    {{ $order->shipping_city }}, {{ $order->shipping_state_name }} {{ $order->shipping_zip }}
                    <br>
                    {{ $order->shipping_country_name }}
                </span>
            </div>
        </div>
    </div>
</div>


<div class="address-information-wrapper">
    <h3 class="section-title">Shipping Tracking API's</h3>
    <form id="shippingForm">
        @csrf
        <input type="hidden" name="order_id" value="{{$order->id}}"/>
        <div class="row">
            <div class="col-md-3">
                <select class="form-control" name="shipper">
                    <option value="">Select Shipping Merchant</option>
                    <option value="dhl" @if($order->shipping_service=="dhl") selected @endif >DHL Shipping</option>
                    <option value="ups" @if($order->shipping_service=="ups") selected @endif >UPS Shipping</option>
                    <option value="dpd" @if($order->shipping_service=="dpd") selected @endif >DPD Shipping</option>
                </select>
                <span class="text-danger" id="shipper_msg"></span>
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" name="tracking_number" value="{{$order->shipping_number}}" placeholder="Enter Tracking Number"/>
                <span class="text-danger" id="tracking_number_msg"></span>
            </div>
            <div class="col-md-3">
                <input type="submit" class="btn btn-success btn-block" value="Save"/> 
            </div>
        </div>
    </form>
</div>


@push('scripts')

<script>
    $("#shippingForm").submit(function(e) {
          $(".error_msg").html("");
          var form_data = new FormData(this);
          e.preventDefault();
               $.ajax({
                   url: "{{route('admin.orders.shipping.store')}}",
                   type: "POST",
                   data: form_data,
                   async: false,
                   success: function (reponse) {
                           alert("Order Dispatch Successfully")
                           location.reload();
                   },error: function (xhr) {
                       setTimeout(function(){
                           $.each(xhr.responseJSON.errors, function(key,value) {
                               $("#"+key+"_msg").html(value);
                               $("input[name="+key+"],textarea[name="+key+"]").addClass("error");
                           }); 
                       },1000);
                   },
                   cache: false,
                   contentType: false,
                   processData: false
               });
           });
           
    
</script>
@endpush