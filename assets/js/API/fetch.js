const getProducts = {
    method: "GET",
  };
  
  fetch("https://api.noroff.dev/api/v1/rainy-days", getProducts)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));