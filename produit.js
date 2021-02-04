// Récupération ID produit

let urlId = window.location.search;
let urlParams = new URLSearchParams(urlId);
let oneId = urlParams.get('id');

// Requête pour afficher le produit sélectionné

appelAjax({ api: "/furniture/" + oneId }).then((productApi) => {
    var product = new Product(productApi);
    document.getElementById('product-content').innerHTML += product.displayDetail();


    document.getElementById('addCart').addEventListener('click', function () {
    basketManager.add(product);
    })
    
    document.getElementById('removeCart').addEventListener('click', function () {
    basketManager.remove(product);
    }) 
})
 
    
    
    
    /* var oneProduct = `<div class='card produit'>
    <h2 class='card-header'>${product.name}</h2>
    <img class='image card-img-top' src='${product.imageUrl}'>
    <p class='card-subtitle'>${product.description}</p>
    <p class='card-text'>${product.price} €</p>
    <button class='btn btn-primary' id='addCart'>Ajouter au panier</button>
    </div>`;
    
    product.total(product);
    */