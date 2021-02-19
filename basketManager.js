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
        if (productBasket != undefined) {
            productBasket.quantity++;
            
        } else {
            this.basket.push(product);
        }
        this.save();
    }
    
    // Fonction qui envoi au localstorage le contenu du panier
    save() {
        localStorage.setItem('basket', JSON.stringify(this.basket));
    }
    
    // Fonction qui supprime un produit au panier
    remove(product) {
        var productBasket = this.basket.find(productBasket => product.id == productBasket.id);
        // Vérifier si quantité > 1 = quantité --
        if (productBasket.quantity > 1) {
            productBasket.quantity--;
        } else {
            // Si quantité = 1 : supprimer produit
            this.basket = this.basket.filter(productBasket => product.id != productBasket.id);
        }
        this.save();
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

