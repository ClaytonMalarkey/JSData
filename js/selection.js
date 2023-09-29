let product_json = Cookies.get(`product`);
console.log(product_json);
let product = JSON.parse(product_json);

console.log(product);
document.body.insertAdjacentHTML(`beforeend`, `<h1>${product[`name`]}</h1>`);
document.body.insertAdjacentHTML(`beforeend`, `<img src=${product[`img_ulr`]}>`);
document.body.insertAdjacentHTML(`beforeend`, `<p>${product['description']}</p>`);
document.body.insertAdjacentHTML(`beforeend`, `<p>${product[`price`]}</h4>`);