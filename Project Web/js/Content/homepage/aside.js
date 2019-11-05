const renderAside = state => {
  return `
    <aside class="col-12 col-md-4 col-lg-3">
    <div class="border-bottom-dashed pb-5">
    <h2 class="font-weight-bold pb-5">SEARCH BY</h2>
    <form action="./action-page.html" method="get" target="_blank" class="form pb-5">
        <input type="text" name="" id="search" placeholder="Your keyword..." class="input pl-2 border-0">
        <button type="submit" class="border-0 icon-2x rounded-circle bg-orange">
            <i class="fas fa-search i-search-by text-white" aria-hidden="true"></i>
        </button>
    </form>
  </div>
  <div class="border-bottom-dashed py-5">
    <h2 class="font-weight-bold pb-5">SHOP BY</h2>
    <ul class="line-height-30px">
        <li><a href="#" class="text-muted">Name: A-Z</a></li>
        <li><a href="#" class="text-muted">Name: Z-A</a></li>
        <li><a href="#" class="text-muted">Price: High to Low</a></li>
        <li><a href="#" class="text-muted">Price: Low to High</a></li>
        <li><a href="#" class="text-muted">Product: Top Sales</a></li>
    </ul>
  </div>
  <div class="border-bottom-dashed py-5">
    <h2 class="font-weight-bolder pb-5">RECENT PRODUCT</h2>
    <div class="d-flex column pb-5">
        <img src="./asset/images/shop-rsp3.jpg" alt="QUANG CAO 1">
        <div class="pl-3">
            <div class="pb-3">
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
            </div>
            <h5 class="font-weight-bolder text-dark pb-3">Raglan Baseball-Style</h5>
            <h6 class="font-weight-bold text-secondary">$119.00 USD</h6>
        </div>
    </div>
    <div class="d-flex column pb-5">
        <img src="./asset/images/shop-rsp4.jpg" alt="QUANG CAO 1">
        <div class="pl-3">
            <div class="pb-3">
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
            </div>
            <h5 class="font-weight-bolder text-dark pb-3">Raglan Baseball-Style</h5>
            <h6 class="font-weight-bold text-secondary">$119.00 USD</h6>
        </div>
    </div>
    <div class="d-flex column pb-5">
        <img src="./asset/images/shop-rsp2.jpg" alt="QUANG CAO 1">
        <div class="pl-3">
            <div class="pb-3">
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
            </div>
            <h5 class="font-weight-bolder text-dark pb-3">Raglan Baseball-Style</h5>
            <h6 class="font-weight-bold text-secondary">$119.00 USD</h6>
        </div>
    </div>
  </div>
  <div class="py-5">
    <img src="./asset/images/shop-banner.jpg" alt="LOGO-BANNER" style="max-width: 100%">
  </div>
    </aside>
      `;
};
