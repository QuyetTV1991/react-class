const renderNavbar = state => {
    return `
  <header class="header d-flex justify-content-between padding-30px">
    <div class="img-logo">
        <img src="./asset/images/logo_shop.png" alt="LOGO_SHOP" class="nav-item-link" data-page="home">
    </div>
    <nav class="navbar navbar-expand-md justify-content-between home-page">
        <ul class="navbar-nav">
            <li class="nav-item px-2">
                <a class="nav-link text-dark font-weight-bolder nav-item-link" data-page="home">HOME</a>
            </li>
            <li class="nav-item px-2 dropdown">
                <a class="nav-link text-dark font-weight-bolder" data-toggle="dropdown" href="#">PAGES</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item nav-item-link" data-page="detail"><b>PRODUCT DETAIL</b></a></li>
                    <li><a class="dropdown-item nav-item-link" data-page="login"><b>LOGIN</b></a></li>
                    <li><a class="dropdown-item nav-item-link" data-page="register"><b>REGISTER</b></a></li>
                    <li><a class="dropdown-item nav-item-link" data-page="checkout"><b>SHOPPING CART</b></a></li>
                </ul>
            </li>
        </ul>
    </nav>        
    <div class="">
        <span class="icon rounded-circle bg-pink icon-search">
            <a class="nav-item-link">
                <i class="fas fa-search i-search fa-lg text-orange" aria-hidden="true"></i>
            </a>
        </span>
        <span class="icon rounded-circle bg-pink margin-left-10px icon-user">
            <a class="nav-item-link" data-page="login">
                <i class="far fa-user i-user fa-lg text-orange" aria-hidden="true"></i>
            </a>
        </span>
        <span class="icon rounded-circle bg-pink margin-left-10px">
            <a class="nav-item-link" data-page="checkout">
                <span class="notification">
                    <i class="fas fa-shopping-cart fa-lg text-orange" aria-hidden="true"></i>
                    <span class="badge bg-pink text-orange">${appState.cartAmount}</span>
                </span>
            </a>
            </span>
    </div>
  </header>
    `;
};
