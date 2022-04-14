<header class="header-wrap">
    <div class="header-wrap-inner">
        <div class="container">
            <div class="row flex-nowrap justify-content-between position-relative">
                <div class="header-column-left">
                    <div class="sidebar-menu-icon-wrap">
                        <div class="sidebar-menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <a href="{{ route('home') }}" class="header-logo">
                            <img src="{{url('/assets/images/logo.png')}}" alt="logo">
                    </a>
                </div>

                <header-search
                    :categories="{{ $categories }}"
                    :most-searched-keywords="{{ $mostSearchedKeywords }}"
                    initial-query="{{ request('query') }}"
                    initial-category="{{ request('category') }}"
                >
                </header-search>

                <div class="header-column-right d-flex row">
                    <div class="col-md-5 text-center hide-mobile">
                        <a href="{{ route('account.dashboard.index') }}" class="header-account" style="margin-right: 20px">
                            <div class="icon-wrap">
                                <i class="lar la-user"></i>
                            </div>
                            <span class="icon-text">Mein Konto</span>
                        </a>
                    </div>

                    <div class="col-md-5 text-center hide-mobile">
                        <center>
                            <a href="{{ route('account.wishlist.index') }}" class="header-wishlist">
                                <div class="icon-wrap">
                                    <i class="lar la-heart"></i>
                                    <div class="count" v-text="wishlistCount"></div>
                                </div>
                            </a>
                            <span class="icon-text">Wunschliste</span>
                        </center>
                    </div>

                    <div class="col-md-5 text-center">
                        <center>
                            <div class="header-cart">
                                <div class="icon-wrap">
                                    <i class="las la-cart-arrow-down"></i>
                                    <div class="count" v-text="cart.quantity"></div>
                                </div>

                                <span v-html="cart.subTotal.inCurrentCurrency.formatted"></span>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
