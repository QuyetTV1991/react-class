const renderProductDetail = state => {
  return `
    <div class="row">
        ${renderDetailAndShopping(state)}
        ${renderCommentAndFullDesc(state)}
    </div>
    `;
};
const renderDetailAndShopping = state => {
  return `
    <div class="col-12 col-md-3 col-lg-6">
        <img src="${state.productDetail.images}">
    </div>
    <div class="col-12 col-md-9 col-lg-6">
        <div class="py-5 border-bottom-dashed">
            <h4 class="small text-muted pb-3">${state.productDetail.catogery.toUpperCase()}</h4>
            <h2 class="font-weight-bold fz-30px pb-3">${
              state.productDetail.name
            }</h2>
            <div class="d-flex">
                <h3 class="fz-30px font-weight-light text-orange">${
                  state.productDetail.newPrice
                }</h3>
                <h3 class="fz-30px font-weight-light text-secondary strike pl-5">${
                  state.productDetail.oldPrice
                }</h3>
            </div>
        </div>
        <article class="py-5 border-bottom-dashed text-secondary">
            ${state.productDetail.desc}
        </article>
        <div class="py-5 border-bottom-dashed">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Brands:</td>
                        <td>${state.productDetail.brand}</td>
                    </tr>
                    <tr>
                        <td>Product Code:</td>
                        <td>${state.productDetail.productCode}</td>
                    </tr>
                    <tr>
                        <td>Reward Points:</td>
                        <td>${state.productDetail.rewardPoint}</td>
                    </tr>
                    <tr>
                        <td>Stock:</td>
                        <td class="text-orange">${
                          state.productDetail.isInStock === true
                            ? "In Stock"
                            : "Empty"
                        }</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pb-5">
            <div class="py-5">
                <span class="but-oval bg-pink">
                    <button class="but-square rounded-circle border-0 bg-light">-</button>
                    <span class="px-3">1</span>
                    <button class="but-square rounded-circle border-0 bg-light">+</button>
                </span>
                <span class="icon rounded-circle bg-pink mx-5">
                    <i class="fas fa-heart i-heart fa-lg text-orange" aria-hidden="true"></i>
                </span>
            </div>
            <button type="submit" class="but-square-lg border-0 bg-orange text-white small">PURCHASE NOW</button>
        </div>
    </div>
    `;
};
const renderCommentAndFullDesc = state => {
  return `
      <div class="col-12 col-md-8 col-lg-8 pb-5 mx-5">
          <ul class="d-flex">
              <li>
                  <button class="but-square-lg border-0 bg-orange text-white small">DESCRIPTION</button>
              </li>
              <li class="pl-4">
                  <button class="but-square-lg border bg-white text-muted small">REVIEW (2)</button>
              </li>
          </ul>
          <article class="text-muted ml-5 mt-5 pt-5 fz-15px">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </article>
      </div>
      `;
};
