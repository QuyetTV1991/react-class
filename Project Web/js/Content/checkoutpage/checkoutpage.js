const renderCheckoutPage = state => {
  return `
    <main class="main mx-auto py-5 my-5">
      ${renderSubHeader(state)}
      <div class="shop-area mx-auto clearfix">
        <form action="">
          <div class="overflow">
            <table class="table-shopping">
              <tbody>
                <tr>
                  <th>Images</th>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
                ${renderListCart(state)}
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between py-5 row">
            <div class="col-12 col-md-7 col-lg-8 padding-y-5">
              <input type="text" placeholder="Coupon Code" class="but-square-lg bg-light text-muted border pl-3" id="coupon-input">
              <button type="submit" data-btn="applyCoupon" class="but-square-lg border-0 bg-success text-white small ml-3 buttonCheckout">
                APPLY COUPON
              </button>
            </div>
            <button type="submit" data-btn="updateCart" class="but-square-lg border-0 bg-orange text-white small col-12 col-md-5 col-lg-4 buttonCheckout">
              UPDATE CART
            </button>
          </div>
          <div class="cart-total">
            <h2 class="fz-30px text-dark font-weight-bold pb-5">Cart Totals</h2>
            <table class="table-total">
              <tbody>
                ${renderCartTotal(state)}
              </tbody>
            </table>
            <div class="pt-5">
              <button type="submit" data-btn="processCart" class="but-square-slg border-0 bg-orange text-white small buttonCheckout" formaction="./action-page.html" formtarget="_blank" formmethod="POST">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  `;
};

const renderListCart = state => {
  return `
    ${state.shoppingCart
      .map(cartItem => {
        return `
        <tr>
          <td><img src=${cartItem.img} class="image-table"></td>
          <td>${cartItem.name}</td>
          <td>${cartItem.price}</td>
          <td>
            <span class="but-oval bg-pink">
              <button data-ID="${
                cartItem.id
              }" data-btn="minus" class="but-square rounded-circle border-0 bg-light buttonCheckout">
                -
              </button>
              <input type="text" data-ID="${
                cartItem.id
              }" class="cart-item" value="${cartItem.quantity}">
              <button data-ID="${
                cartItem.id
              }" data-btn="plus" class="but-square rounded-circle border-0 bg-light buttonCheckout">
                +
              </button>
            </span>
          </td>
          <td>$${cartItem.price.slice(1, cartItem.price.length - 3) *
            cartItem.quantity}.00 USD</td>
          <td>
          <button data-ID="${
            cartItem.id
          }" class="but-square rounded-circle border-0 bg-light removeItem">X</button>
          </td>
        </tr>
      `;
      })
      .join("")}
  `;
};

const renderCartTotal = state => {
  return `
    <tr>
      <td>Subtotal</td>
      <td>$${state.totalCart}.00 USD
      </td>
    </tr>
    <tr>
      <td>Total</td>
      <td>$${state.totalCart * state.coupon} USD
      </td>
    </tr>
  `;
};
