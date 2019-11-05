const renderSection = state => {
  return `
  <section class="col-12 col-md-8 col-lg-9">
    <span class="border p-4 text-muted">
        SHOWING 1-22 OF 32 RESULTS
    </span>
    <div class="row my-5">    
    <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
        <span class="badge"></span>
        <a target="_blank" href="./detail-page.html">
            <img src="./asset/images/pro1.jpg" alt="Anh Quang Cao 1">
        </a>
        <div class="desc">
            <h4 class="small text-danger text-left">FUNITURE</h4>
            <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
            <div class="d-flex justify-content-start">
                <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                <h6 class="font-weight-bolder strike">$230.00 USD</h6>
            </div>
        </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge">SALE</span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro2.jpg" alt="Anh Quang Cao 2">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge"></span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro3.jpg" alt="Anh Quang Cao 3">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge"></span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro4.jpg" alt="Anh Quang Cao 4">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge"></span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro5.jpg" alt="Anh Quang Cao 5">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge"></span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro6.jpg" alt="Anh Quang Cao 6">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge"></span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro7.jpg" alt="Anh Quang Cao 7">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge">SALE</span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro8.jpg" alt="Anh Quang Cao 8">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge"></span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro9.jpg" alt="Anh Quang Cao 9">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge"></span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro10.jpg" alt="Anh Quang Cao 10">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge"></span>                        
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro11.jpg" alt="Anh Quang Cao 11">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
  <div class="col-12 col-md-6 col-lg-4">
      <div class="gallery product">
          <span class="badge">SALE</span>
          <a target="_blank" href="./detail-page.html">
              <img src="./asset/images/pro12.jpg" alt="Anh Quang Cao 12">
          </a>
          <div class="desc">
              <h4 class="small text-danger text-left">FUNITURE</h4>
              <h4 class="font-weight-bold text-dark text-left">Minimal Deco Furniture</h4>
              <div class="d-flex justify-content-start">
                  <h6 class="font-weight-bolder text-secondary pr-5">$119.00 USD</h6>
                  <h6 class="font-weight-bolder strike">$230.00 USD</h6>
              </div>
          </div>
      </div>
  </div>
</div>
  </section>
    `;
};
