// Récupération ID produit

let urlId = window.location.search;
let urlParams = new URLSearchParams(urlId);
let oneId = urlParams.get('id');

// Requête pour afficher le produit sélectionné

appelAjax({ api: "/furniture/" + oneId }).then((productApi) => {
    var product = new Product(productApi);
    document.getElementById('product-content').innerHTML += product.displayDetail();
    
    // Ajout d'un gestionnaire d'événement lors de l'ajout au panier
    document.getElementById('addCart').addEventListener('click', function () {
        basketManager.add(product);
    })
    
    document.getElementById('removeCart').addEventListener('click', function () {
        basketManager.remove(product);
    }) 
})

