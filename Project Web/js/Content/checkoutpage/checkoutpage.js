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
                ${renderCart(state)}
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between py-5 row">
            <div class="col-12 col-md-7 col-lg-8 padding-y-5">
              <input type="text" placeholder="Coupon Code" class="but-square-lg bg-light text-muted border pl-3">
              <button type="submit" class="but-square-lg border-0 bg-success text-white small ml-3">
                APPLY COUPON
              </button>
            </div>
            <button type="submit" class="but-square-lg border-0 bg-orange text-white small col-12 col-md-5 col-lg-4">
              UPDATE CART
            </button>
          </div>
          <div class="cart-total">
            <h2 class="fz-30px text-dark font-weight-bold pb-5">Cart Totals</h2>
            <table class="table-total">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>$250.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$250.00</td>
                </tr>
              </tbody>
            </table>
            <div class="pt-5">
              <button type="submit" class="but-square-slg border-0 bg-orange text-white small" formaction="./action-page.html" formtarget="_blank" formmethod="POST">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  `;
};

const renderCart = state => {
  return `
    ${state.shoppingCart.map(cartItem => {
    return `
        <tr>
          <th><img url=${cartItem.img}></th>
          <th>${cartItem.name}</th>
          <th>${cartItem.price}</th>
          <th>${cartItem.quantity}</th>
          <th>${cartItem.price * cartItem.quantity}</th>
          <th>X</th>
        </tr>
      `
  })}
  `
}