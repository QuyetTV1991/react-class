const appState = {
  activePage: "home",
  products: [
    {
      productID: "1",
      productImg: "./asset/images/pro1.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
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
      isSale: true
    },
    {
      productID: "4",
      productImg: "./asset/images/pro4.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    },
    {
      productID: "5",
      productImg: "./asset/images/pro5.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    },
    {
      productID: "6",
      productImg: "./asset/images/pro6.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    },
    {
      productID: "7",
      productImg: "./asset/images/pro7.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
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
      isSale: true
    },
    {
      productID: "10",
      productImg: "./asset/images/pro10.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
    },
    {
      productID: "11",
      productImg: "./asset/images/pro11.jpg",
      catogery: "Furniture",
      productName: "Minimal Deco Furniture",
      productOldPrice: "$230.00 USD",
      productNewPrice: "$119.00 USD",
      isSale: true
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
  shoppingCart: []
};

const renderHTML = state => {
  const body = document.querySelector("body");
  const template = `
        ${renderNavbar(state)}
        ${renderContent(state)}
        ${renderFooter(state)}
    `;
  body.innerHTML = template;
  //   bindEvents();
};

renderHTML(appState);

// const bindEvents = () => {};
