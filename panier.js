// Affichage panier 

/*
document.getElementById('cart-tablebody').innerHTML += product.displayBasket();


for (let product of productBasket){
    document.getElementById("cart-tablebody").innerHTML += product.displayBasket();
}
for (let product of productBasket) {
    var product = new Product(product);
    div.innerHTML += product.displayList();
} 


var basket = localStorage.getItem('basket');
basket = JSON.parse(basket);
var showBasket = document.querySelector("cart-tablebody");
for (let productBasket of this.basket) {
    showBasket.innerHTML += basket.displayBasket();
} 


appelAjax({}).then((result) => {
    let showBasket = document.querySelector("show-basket");
    for (let productApi of result) {
        var product = new Product(productApi);
        showBasket.innerHTML += product.displayBasket();
    } 
})

*/
// Récupération localstorage
let basket = localStorage.getItem("basket");
basket = JSON.parse(basket);
// Récupération élément où afficher le panier
let showBasket = document.getElementById("show-basket");
// Boucle pour afficher les produits du panier
for (let productInBasket of basket) {
    let product = new Product(productInBasket);
    showBasket.innerHTML += product.displayBasket();
}

// Affichage prix total du panier
document.getElementById('total').innerHTML = basketManager.total();