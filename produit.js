let urlId = window.location.search;
let urlParams = new URLSearchParams(urlId);
let oneId = urlParams.get('id');
console.log(oneId);

appelAjax({}).then((result) => {
    let otherDiv = document.getElementById('product-content');
    for (let product of result) {
        if (oneId == product._id) {
            var oneProduct = `<h2 class='card-header'>${product.name}</h2>
            <img class='image card-img-top' src='${product.imageUrl}'>
            <p class='card-subtitle'>${product.description}</p>
            <p class='card-text'>${product.price} €</p>
            </a>`;
            
            otherDiv.innerHTML += oneProduct;
        }
    }
    
})