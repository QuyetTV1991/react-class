const appState = {
  activePage: "home",
  products: [
    {
      productID: 1,
      productImg: "./asset/images/pro1.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 2,
      productImg: "./asset/images/pro2.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    },
    {
      productID: 3,
      productImg: "./asset/images/pro3.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 4,
      productImg: "./asset/images/pro4.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 5,
      productImg: "./asset/images/pro5.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 6,
      productImg: "./asset/images/pro6.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 7,
      productImg: "./asset/images/pro7.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 8,
      productImg: "./asset/images/pro8.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    },
    {
      productID: 9,
      productImg: "./asset/images/pro9.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 10,
      productImg: "./asset/images/pro10.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 11,
      productImg: "./asset/images/pro11.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: 12,
      productImg: "./asset/images/pro12.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    }
  ],
  shoppingCart: [
  ],
  cartAmount: 0,
  coupon: 1,
  couponTable: {
    FUR80: 0.8,
    FUR60: 0.6
  }
};

const renderHTML = state => {
  const body = document.querySelector("body");
  const template = `
        ${renderNavbar(state)}
        ${renderContent(state)}
        ${renderFooter(state)}
    `;
  body.innerHTML = template;
  bindEvents();
};

const bindEvents = () => {
  // event switch pages
  const navItemLinks = document.querySelectorAll('.nav-item-link');
  navItemLinks.forEach(itemLink => {
    itemLink.addEventListener('click', () => {
      const datapage = itemLink.getAttribute('data-page')
      appState.activePage = datapage
      renderHTML(appState)
    })
  })
  // event add to cart
  const add2CartBtn = document.querySelectorAll('.add-to-cart');
  add2CartBtn.forEach(cartBtn => {
    cartBtn.addEventListener('click', () => {
      const btnID = cartBtn.getAttribute('data-btnid')
      let productSelected = appState.products.find(function (product) {
        return product.productID == btnID
      })
      let itemisInShoppingCart = appState.shoppingCart.find(function (item) {
        return item.id == btnID
      })
      if (itemisInShoppingCart !== undefined) {
        itemisInShoppingCart.quantity += 1
      }
      else {
        let newCartItem = {
          id: productSelected.productID,
          img: productSelected.productImg,
          catogery: productSelected.catogery,
          name: productSelected.productName,
          price: productSelected.productNewPrice,
          quantity: 1
        }
        appState.shoppingCart.push(newCartItem)
      }
      appState.cartAmount = appState.shoppingCart.reduce(function (sum, item) {
        sum = sum + item.quantity
        return sum
      }, 0)
      renderHTML(appState)
    })
  })
  // button checkout page
  document.querySelectorAll('.buttonCheckout').forEach(button => {
    button.addEventListener('click', () => {
      let dataBtn = button.getAttribute('data-btn')
      if (dataBtn == 'applyCoupon') {
        let coupon = document.querySelector('#coupon-input').value;
        appState.coupon = appState.couponTable[coupon]
        renderHTML(appState)
      }
      // else if (dataBtn == 'updateCart')
    })
  })
};
renderHTML(appState);