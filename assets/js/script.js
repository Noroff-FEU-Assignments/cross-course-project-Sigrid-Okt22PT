const url ="https://sigridjohanne.site/wp-json/wc/store/products";

const resultsMenDiv = document.querySelector(".product-page-men");
const resultsWomDiv = document.querySelector(".product-page-wom");
const favouritesDiv = document.querySelector(".favourites");



async function getMenProducts() {

    const response = await fetch(url);

    const product = await response.json();

    resultsMenDiv.innerHTML = '';

    for (let i = 0; i < product.length; i++) {

        if(product[i].categories[0].id==16){


        resultsMenDiv.innerHTML += `
        <div class="products white m-1">
        <a href="product-page.html?id=${product[i].id}">
                <div class="products-pic">
                    <img src="${product[i].images[0].src}" alt="${product[i].images[0].alt}">
                </div>
                <div class="products-info">
                    <h2 class="ls">${product[i].name}</h2>
                    <p>${product[i].prices.price}</p>
                    <a href="products-men.html" ><i class="fas fa-regular fa-cart-shopping fa-lg"></i></a>
                    </a>
                </div>`;
    }
}

   
}
getMenProducts();

async function getWomProducts() {

    const response = await fetch(url);

    const product = await response.json();

    resultsWomDiv.innerHTML = "";

    for (let i = 0; i < product.length; i++) {

        if(product[i].categories[0].id==17){


        resultsWomDiv.innerHTML += `
        <div class="products white m-1">
        <a href="product-page.html?id=${product[i].id}">
                <div class="products-pic">
                    <img src="${product[i].images[0].src}" alt="${product[i].images[0].alt}">
                </div>
                <div class="products-info">
                    <h2 class="ls">${product[i].name}</h2>
                    <p>${product[i].prices.price}</p>
                    <a href="products-women.html" ><i class="fas fa-regular fa-cart-shopping fa-lg"></i></a>
                </a>
                </div>`;
    }
}

   
}
getWomProducts();


async function getFavProducts() {
    const response = await fetch(url);
    const product = await response.json();

favouritesDiv.innerHTML = "";
for (let i = 0; i < product.length; i++) {

    if(product[i].on_sale==true) {
        
    favouritesDiv.innerHTML += `
    <div class="products white m-1">
    <a href="product-page.html?id=${product[i].id}">
            <div class="products-pic">
                <img src="${product[i].images[0].src}" alt="${product[i].images[0].alt}">
            </div>
            <div class="products-info">
                <h2 class="ls">${product[i].name}</h2>
                <p>${product[i].prices.price}</p>
                <a href="products-men.html" ><i class="fas fa-regular fa-cart-shopping fa-lg"></i></a>
                </a>
            </div>`;
    }
}
}
getFavProducts();
