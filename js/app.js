let products = [
    {
        name:"landing page",
        img_ulr:"/imgs/landingpage.jpg",
        description:"a simple starter page for call to action and saying what you offer perfect for the enterprenuer on a budget",
        price: 1500
    },
    {
        name:"three page wonder",
        img_ulr:"/imgs/threepagewonder/jpg",
        description:"a simple three page wonder with a front page a products page and a contact page",
        price: 2500
    },
    {
        name:"full on eccommerce site",
        img_ulr:"/imgs/eccommerce.jpg",
        description:"a simple content management system will be deployed that you can easily manage yourself that uses all the power of modern tech",
        price:5000
    }
]

let products_json = JSON.stringify(products);
Cookies.set(`products`, products_json);

let counter = 0;

while (counter < products.length){
    let products_json = Cookies.get(`products`);
    let products = JSON.parse(products_json);
    let product = products[counter];
    document.body.insertAdjacentHTML('beforeend',`<button product_name=${product['name']} product_price=${product['price']} product_description=${product['description']} img_ulr=${product['img_ulr']}>${product[`name`]}</button>`);
    console.log(products);
    counter++; 
}
