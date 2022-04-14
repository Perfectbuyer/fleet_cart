<section class="navigation-wrap">
    <div class="container-fluid">
      @include('public.layout.navigation.primary_menu')
        <div class="navigation-inner">

          <img src="{{url('/assets/images/banner.jpeg')}}" width="100%"/>
            <span class="navigation-text">
                {{ setting('storefront_navbar_text') }}
            </span>
        </div>
    </div>
</section>
