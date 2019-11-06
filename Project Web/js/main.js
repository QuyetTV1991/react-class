const appState = {
  activePage: "checkout",
  products: [
    {
      productID: "1",
      productImg: "./asset/images/pro1.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "2",
      productImg: "./asset/images/pro2.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    },
    {
      productID: "3",
      productImg: "./asset/images/pro3.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "4",
      productImg: "./asset/images/pro4.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "5",
      productImg: "./asset/images/pro5.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "6",
      productImg: "./asset/images/pro6.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "7",
      productImg: "./asset/images/pro7.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "8",
      productImg: "./asset/images/pro8.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    },
    {
      productID: "9",
      productImg: "./asset/images/pro9.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "10",
      productImg: "./asset/images/pro10.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "11",
      productImg: "./asset/images/pro11.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: false
    },
    {
      productID: "12",
      productImg: "./asset/images/pro12.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    }
  ],
  shoppingCart: [
    {
      img: "./asset/images/pro1.jpg",
      name: "Minimal Deco Furniture",
      price: "$119.00 USD",
      quantity: 1
    },
    {
      img: "./asset/images/pro2.jpg",
      name: "Minimal Deco Furniture",
      price: "$119.00 USD",
      quantity: 12
    }
  ],
  CartAmount: 0
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
  const navItemLinks = document.querySelectorAll('.nav-item-link');
  navItemLinks.forEach(itemLink => {
    itemLink.addEventListener('click', () => {
      const datapage = itemLink.getAttribute('data-page')
      appState.activePage = datapage
      renderHTML(appState)
    })
  })
};
renderHTML(appState);