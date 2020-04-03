console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);

// Searching for products


let sortedProducts = products;
function filter() {
    let value = document.getElementById('input').value;
    sortedProducts = sortedProducts.filter(prod => prod.name.toLowerCase() === value);
    renderProducts(sortedProducts);
}

//document.getElementById('mybutton').addEventListener('click', filter);


document.querySelector(".search > input").addEventListener('keyup', (event) => {
    let filteredProduct = products.filter(product => product.name === event.target.value)});
    
//const searchWord = document.getElementById('input').value