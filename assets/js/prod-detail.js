const productInfo = document.querySelector(".product-page");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const urlId = "https://sigridjohanne.site/wp-json/wc/store/products/" + id ;

async function fetchProduct() {

    try {
        const response = await fetch(urlId);
        const product = await response.json();

        createHtml(product);
      
    }
    catch(error) {
        productInfo.innerHTML = message("error", error);
    }
    
}

fetchProduct();

function createHtml(product) {
    if (product.on_sale==true){
        productInfo.innerHTML = `<div class="product-page-card">
        <h1>${product.name}</h1>
       <div class="products-pic">
           <img src="${product.images.src}" alt="${product.images.alt}">
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
        <h1>${product.name}</h1>
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
