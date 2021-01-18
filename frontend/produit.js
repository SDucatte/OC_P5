// Récupération ID produit

let urlId = window.location.search;
let urlParams = new URLSearchParams(urlId);
let oneId = urlParams.get('id');

// Requête pour afficher le produit sélectionné

appelAjax({api: "/furniture/" + oneId}).then((product) => {
    let otherDiv = document.getElementById('product-content');

        var oneProduct = `<div class='card card__produit'>
        <h2 class='card-header'>${product.name}</h2>
        <img class='image card-img-top' src='${product.imageUrl}'>
        <p class='card-subtitle'>${product.description}</p>
        <p class='card-text'>${product.price} €</p>
        <button class='btn btn-primary' id='addCart'>Ajouter au panier</button>
        </div>`;

        otherDiv.innerHTML += oneProduct;
})


