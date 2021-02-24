class BasketManager {
    // Initialisation du panier
    constructor() {
        // Vérification si le panier contient un produit
        var basket = localStorage.getItem('basket');
        // Quand le panier est vide, renvoi un tableau vide
        this.basket = [];
        // Quand le panier n'est pas vide, ajoute au panier les produits qui était déjà dans le panier
        if (basket != null) {
            for (let productBasket of JSON.parse(basket)){
                this.basket.push(new Product(productBasket));
            }
        }
    }
    // Fonction qui ajoute un produit au panier
    add(product) {
        var productBasket = this.basket.find(productBasket => product.id == productBasket.id);

        // Quand le produit est déjà dans le panier, ajouter 1 à la quantité
        if (productBasket != undefined) {
            productBasket.quantity++;
        // Quand il n'y est pas, ajoute le produit
        } else {
            this.basket.push(product);
        }
        this.save();
    }
    
    // Fonction qui envoi au localstorage le contenu du panier
    save() {
        localStorage.setItem('basket', JSON.stringify(this.basket));
    }
    
    // Fonction qui calcul le prix total du panier
    total(product) {
        var total = 0;
        for(let productBasket of this.basket){
            total += productBasket.totalPrice();
        }
        return total;
    }
}

// Stockage de la classe de gestion de panier dans une variable
var basketManager = new BasketManager();

