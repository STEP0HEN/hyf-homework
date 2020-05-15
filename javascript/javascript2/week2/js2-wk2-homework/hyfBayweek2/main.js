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

const inputElement = document.querySelector(".search > input")
inputElement.addEventListener('keyup', (event) => {
    const filteredProduct = products.filter(product => product.name === event.target.value)
    const productsUlTag = document.querySelector('section.products ul')
    productsUlTag.innerHTML = "";
      renderProducts(filteredProduct);
    });