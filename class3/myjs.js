const products = [
    {
        catogery: 'FUNITURE',
        name: 'Minimal Deco Furniture',
        priceSale: '$119.00 USD',
        price: '$230.00 USD',
        img: '../class3/asset/images/pro1.jpg',
        alt: 'Anh Quang Cao 1'
    },
    {
        catogery: 'FUNITURE',
        name: 'Minimal Deco Furniture',
        priceSale: '$119.00 USD',
        price: '$230.00 USD',
        img: '../class3/asset/images/pro2.jpg',
        alt: 'Anh Quang Cao 1'
    }
]

const productsContainer = document.querySelector('.product')
for (let i = 0; i < products.length; i++) {
    const productEl = createProductEl(products[i])
    productsContainer.append(productEl)
}

function createProductEl(productObj) {
    const productEl = document.createElement('div')
    productEl.classList.add('gallery')
    productEl.innerHTML = `
        <img src = ${productObj.img} alt = ${productObj.alt}>
        <div class="desc">
            <h4 class="small text-danger text-left">${productObj.catogery}</h4>
            <h4 class="font-weight-bold text-dark text-left">${productObj.name}</h4>
            <div class="d-flex justify-content-start">
                <h6 class="font-weight-bolder text-secondary pr-5">${productObj.priceSale}</h6>
                <h6 class="font-weight-bolder strike">${productObj.price}</h6>
            </div>
        </div> 
    `
    return productEl
}
