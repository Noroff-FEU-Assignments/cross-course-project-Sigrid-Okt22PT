const productInfo = document.querySelector(".product-page");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const urlId = "https://api.noroff.dev/api/v1/rainy-days/" + id ;

console.log(urlId);

async function fetchProduct() {

    try {
        const response = await fetch(urlId);
        const product = await response.json();

        console.log(product);

        createHtml(product);
      
    }
    catch(error) {
        console.log(error);
        productInfo.innerHTML = message("error", error);
    }
    
}

fetchProduct();

function createHtml(product) {
    if (product.onSale==true){
        productInfo.innerHTML = `<div class="product-page-card">
        <h1>${product.title}</h1>
       <div class="products-pic">
           <img src="${product.image}" alt="${product.image}">
       </div>
       <div class="">
           <h1>${product.discountedPrice}</h1><p style="color:red;">${product.price}</p>
           <p>${product.description}</p>
           <p>${product.sizes}</p>
           <p>${product.baseColor}</p>
           
           <a href="checkout.html" ><i class="fas fa-regular fa-cart-shopping fa-lg"></i></a>
           </a>
        </div>`;
    }
    else{
        productInfo.innerHTML = `<div class="product-page-card">
        <h1>${product.title}</h1>
       <div class="products-pic">
           <img src="${product.image}" alt="${product.image}">
       </div>
       <div class="">
           <h1>${product.price}</h1>
           <p>${product.description}</p>
           <p>${product.sizes}</p>
           <p>${product.baseColor}</p>
           <a href="checkout.html" ><i class="fas fa-regular fa-cart-shopping fa-lg"></i></a>
           </a>
        </div>`;
    }
}
