const renderSection = state => {
    return `
  <section class="col-12 col-md-8 col-lg-9">
    <span class="border p-4 text-muted">
        SHOWING 1-22 OF 32 RESULTS
    </span>
    <div class="row my-5">
    ${state.products.map(product => {
        return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="gallery product">
                <span class="badge">${product.isSale === true ? 'SALE' : ''}</span>
                <a data-page="detail" data-productID="${product.productID}">
                    <img src=${product.productImg} alt="Anh Quang Cao ${product.productID}">
                </a>
                <div class="desc">
                    <h4 class="small text-danger text-left">${product.catogery.toUpperCase()}</h4>
                    <h4 class="font-weight-bold text-dark text-left">${product.productName}</h4>
                    <div class="d-flex justify-content-start">
                        <h6 class="font-weight-bolder text-secondary pr-5">${product.productNewPrice}</h6>
                        <h6 class="font-weight-bolder strike">${product.productOldPrice}</h6>
                        <button class="add-to-cart" data-btnId ="${product.productID}">Add to Cart
                            <i class="fas fa-cart-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join('')
        }    
    </div>
  </section>
    `;
};
