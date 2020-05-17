"use strict"

const bodyTag = document.querySelector("body");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };
};

class ShoppingCart {
    constructor() {
        this.products = [];
    };

    addProduct(product) {
        this.products.push(product)
    };
    
    removeProduct(product) {
        const  newProducts = this.products.filter((existingProduct => {
            return existingProduct.name !== product.name && product.price
        }))
        this.products = newProducts
    };
    
    searchProduct(productName) {
        const searchProduct = this.products.filter (item => item.name.includes(productName))
        this.products = searchProduct
        //console.log(searchProduct);
    };
    
    getTotal() {
        let sum = this.products.map(item => item.price)
        .reduce((a,b) => {
            return a+b
        })
        //console.log(sum)
        const div = document.createElement("div")
        const total = document.createElement('p')
        total.textContent = `Total : ${sum} kr`
        div.appendChild(total)
        bodyTag.appendChild(div)
    };
    
    renderProducts() {
        const div = document.createElement('div')
        this.products.forEach(item => {
            const p =  document.createElement('li')
            p.textContent = ` ${item.name} : ${item.price}`
            
            div.appendChild(p)
            bodyTag.appendChild(div)
        })
    };
    
    getUser() {
        const api = `https://jsonplaceholder.typicode.com/users/1`
        const userApi = fetch(api)
        return new Promise((resolve)=>{
            resolve(userApi)
        })
        .then(response => response.json())
        .then(result => {
            const username = result.username
            const div = document.createElement("div")
            const pTag = document.createElement("h1")
            pTag.textContent = `User : ${username}`
            div.appendChild(pTag)
            bodyTag.appendChild(div)
        })
    };
};


const shoppingCart = new ShoppingCart();
const flatscreen = new Product('flat-screen', 5000);
const backpack =  new Product('backpack', 2000);
const bike = new Product('bike', 9000);
const bookCase = new Product('bookCase', 3000);
shoppingCart.addProduct(backpack);
shoppingCart.addProduct(bike);
shoppingCart.addProduct(bookCase);
shoppingCart.addProduct(flatscreen);

console.log(shoppingCart);
shoppingCart.removeProduct(flatscreen);
console.log(shoppingCart);
console.log(shoppingCart);
//shoppingCart.searchProduct("backpack");
console.log(shoppingCart);
shoppingCart.renderProducts();
shoppingCart.getUser();
shoppingCart.getTotal();




