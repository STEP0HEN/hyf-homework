"use strict"


const bodyTag = document.querySelector("body");



class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };

    convertToCurrency(currency) {
        const apiUrl = `https://api.exchangeratesapi.io/latest?base=DKK`;
        return fetch (apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(this.price * data.rates[currency])
            
        })
        .catch(err => console.log(err)); 
        
    }
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
            return existingProduct.name !== product.name
        }))
        this.products = newProducts
    };
    
    searchProduct(productName) {
        const searchProduct = this.products.filter (item => item.name.includes(productName))
        this.products = searchProduct
    };
    
    getTotal() {
        let sum = this.products.map(item => item.price)
        .reduce((a, b) => (a += b), 0);
        const div = document.createElement("div")
        const total = document.createElement('p')
        total.textContent = `Total : ${sum} kr`
        div.appendChild(total)
        bodyTag.appendChild(div)
    };
    
    renderProducts() {
        this.products.forEach(item => {
            const div = document.getElementById("shopping-cart")
            const p =  document.createElement('p')
            p.textContent = ` ${item.name} : ${item.price} kr`
            
            div.appendChild(p)
        })
    };
    
    getUser() {
        const api = `https://jsonplaceholder.typicode.com/users/1`
        const userApi = fetch(api)
        return new Promise((resolve)=>{const div = document.createElement("div")
            resolve(userApi)
        })
        .then(response => response.json())
        .then(result => {
            const username = result.username
            const userName = document.getElementById("user-name")
            userName.textContent = `${username}'s Shopping Cart`
        })
    };
};



const shoppingCart = new ShoppingCart();
const flatscreen = new Product('flat-screen', 5000);
const backpack =  new Product('backpack', 2000);
const bike = new Product('bike', 9000);
const bookCase = new Product('bookCase', 3000);
const fridge = new Product('fridge', 2500);
const cup = new Product('cup', 5000);
const couch = new Product("couch", 20000);
const trampoline = new Product('trampoline', 1000);
const chair = new Product('chair', 120000);
const lamp = new Product('lamp', 9000);

shoppingCart.addProduct(backpack);
shoppingCart.addProduct(bike);
shoppingCart.addProduct(bookCase);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(fridge);
shoppingCart.addProduct(cup);
shoppingCart.addProduct(couch);
shoppingCart.addProduct(trampoline);
shoppingCart.addProduct(chair);
shoppingCart.addProduct(lamp);


console.log(shoppingCart);
shoppingCart.removeProduct(flatscreen);
console.log(shoppingCart);
console.log(shoppingCart);

//shoppingCart.searchProduct(backpack);
console.log(shoppingCart);
shoppingCart.renderProducts();
shoppingCart.getUser();
shoppingCart.getTotal();

bike.convertToCurrency("USD");



const inputSearch = document.querySelector("input");
inputSearch.addEventListener("keyup", () => {  
    const productName = inputSearch.value;  
    const filteredProducts = shoppingCart.searchProduct(productName)
    shoppingCart.renderProducts(filteredProducts)
});

