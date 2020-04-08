console.log('Script loaded');

//console.log(getAvailableProducts());

/*const testProductnames = ['Dishwasher', 'Ricecooker', 'Shoes', 'shirts', 'bags', 'headphones']
const ulTag = document.querySelector('section.products > ul')
for (let i = 0; i < testProductnames.length; i++) {
    const productName = testProductnames[i]

    const NewLiTag = document.createElement('li')
    NewLiTag.innerHTML = productName;
    ulTag.appendChild(NewLiTag)
}
*/

const products = getAvailableProducts();
console.log(products)
const testProductnames = ['Dishwasher', 'Ricecooker', 'Shoes', 'shirts', 'bags', 'headphones']
function renderProducts(products) {
    const ulTag = document.querySelector('section.products > ul')
    for (let i = 0; i < products.length; i++) {
        const productName = products[i]
        
        
        //const productlist = document.createElement('li')
        //productlist.innerHTML = `${productName.name}`;
        
        //const newUlTag = document.createElement('ul')

        const productid = document.createElement('li')
        productid.innerHTML = `${productName.id}`;
        ulTag.appendChild(productid)
        
        const productNameTag = document.createElement('li')
        productNameTag.innerHTML = `${productName.name}`;
        ulTag.appendChild(productNameTag)
        
        const productPrice = document.createElement('li')
        productPrice.innerHTML = `${productName.price}`;
        ulTag.appendChild(productPrice)
        
        const productRating = document.createElement('li')
        productRating.innerHTML = `${productName.rating}`;
        ulTag.appendChild(productRating)
        
        const productShipping = document.createElement('li')
        productShipping.innerHTML = `[${productName.shipsTo}}`;
        ulTag.appendChild(productShipping)
        
    }
}

renderProducts(products)

