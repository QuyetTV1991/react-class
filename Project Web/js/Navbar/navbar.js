const renderNavbar = state => {
  return `
  <header class="header d-flex justify-content-between padding-30px">
  <div class="bar">
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        <a href="./detail-page.html">PRODUCT DETAIL</a>
        <a href="./login-page.html">LOGIN</a>
        <a href="./register-page.html">REGISTER</a>
        <a href="./shopping-page.html">SHOPPING CART</a>
    </div>
    <i class="fas fa-bars fa-2x" onclick="openNav()" aria-hidden="true"></i>
    </div>
        <div class="img-logo">
            <a href="./index.html">
                <img src="./asset/images/logo_shop.png" alt="LOGO_SHOP">
            </a>
        </div>
        <nav class="navbar navbar-expand-md justify-content-between home-page">
            <ul class="navbar-nav">
                <li class="nav-item px-2">
                    <a class="nav-link text-dark font-weight-bolder" href="./index.html">HOME</a>
                </li>
                <li class="nav-item px-2 dropdown">
                    <a class="nav-link text-dark font-weight-bolder" data-toggle="dropdown" href="#">PAGES</a>
                    <ul class="dropdown-menu">
                        <li><a href="./detail-page.html" target="_blank" class="dropdown-item"><b>PRODUCT DETAIL</b></a></li>
                        <li><a href="./login-page.html" target="_blank" class="dropdown-item"><b>LOGIN</b></a></li>
                        <li><a href="./register-page.html" target="_blank" class="dropdown-item"><b>REGISTER</b></a></li>
                        <li><a href="./shopping-page.html" target="_blank" class="dropdown-item"><b>SHOPPING CART</b></a></li>
                    </ul>
                </li>
             </ul>
        </nav>        
        <div class="">
            <span class="icon rounded-circle bg-pink icon-search">
                <a href="#search" target="_blank" class="">
                    <i class="fas fa-search i-search fa-lg text-orange" aria-hidden="true">
                    </i>
                </a>
            </span>
            <span class="icon rounded-circle bg-pink margin-left-10px icon-user">
                <a href="./login-page.html">
                    <i class="far fa-user i-user fa-lg text-orange" aria-hidden="true"></i>
                </a>
            </span>
            <span class="icon rounded-circle bg-pink margin-left-10px">
                <a href="./shopping-page.html">
                    <span class="notification">
                        <i class="fas fa-shopping-cart fa-lg text-orange" aria-hidden="true"></i>
                        <span class="badge bg-pink text-orange">3</span>
                    </span>
                </a>
            </span>
        </div>
  </header>
    `;
};
