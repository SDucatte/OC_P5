// Appel de notre fonction contenant la requête AJAX
appelAjax({}).then((result) => {
    // Récupération de l'élément HTML qui recevra la réponse de la requête
    let div = document.getElementById('product-content');
    // Boucle qui récupère tous les objets de la réponse et les affichent
    for (let productApi of result) {
       var product = new Product(productApi);
       div.innerHTML += product.displayList();
    } 
}).catch((resultFailed) => {
    var resultFailed = "Oups, une erreur s'est produite !";
    alert (resultFailed);

});

