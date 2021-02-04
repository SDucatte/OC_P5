class BasketManager {
    constructor() {
        var basket = localStorage.getItem('basket');
        this.basket = [];
        if (basket != null) {
            for (let productBasket of JSON.parse(basket)){
                this.basket.push(new Product(productBasket));
            }
        }
        
        
    }
    add(product) {
        var productBasket = this.basket.find(productBasket => product.id == productBasket.id);
        if (productBasket != undefined) {
            productBasket.quantity++;
            
        } else {
            this.basket.push(product);
        }
        this.save();
    }
    
    save() {
        localStorage.setItem('basket', JSON.stringify(this.basket));
    }
    
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
    
    total(product) {
        // calcul du prix total du panier
        var total = 0;
        for(let productBasket of this.basket){
            total += productBasket.totalPrice();
        }
        return total;
    }
}


var basketManager = new BasketManager();

