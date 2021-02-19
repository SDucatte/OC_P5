class Product {
    // Initialisation de la classe produit
    constructor(produit) {
        if (produit.quantity != undefined){
            this.fromBasket(produit);
        } else {
            this.fromApi(produit);
        }
    }
    
    // Fonction qui définit les propriétés du produit lorsque celui est récupéré de l'API
    fromApi(produit){
        this.id = produit._id;
        this.name = produit.name;
        this.img = produit.imageUrl;
        this.custom = produit.varnish;
        this.description = produit.description;
        this.quantity = 1;
        this.price = produit.price/100;
        
    }

    // Fonction qui définit les propriétés du produit lorsque celui est récupéré du panier
    fromBasket(produit){
        this.id = produit.id;
        this.name = produit.name;
        this.img = produit.img;
        this.custom = produit.custom;
        this.description = produit.description;
        this.quantity = produit.quantity;
        this.price = produit.price;
    }
    
    // Affichage de tous les produits sur la page index.html
    displayList() {
        return `<a href="produit.html?id=${this.id}" class='card link'>
        <h2 class='card-header'>${this.name}</h2>
        <img class='image card-img-top' src='${this.img}'>
        <p class='card-subtitle'>${this.description}</p>
        <p class='card-text'>${this.price} €</p>
        </a>`;
    }
    
    // Affichage d'un produit sur la page produit.html
    displayDetail() {
        return `<div class='card produit'>
        <h2 class='card-header'>${this.name}</h2>
        <img class='image card-img-top' src='${this.img}'>
        <p class='card-subtitle'>${this.description}</p>
        <p class="default-option">Choix de votre vernis</p>
        <select id='option'>
        ${this.displayVarnish()}
        </select>
        <p class='card-text'>${this.price} €</p>
        <button class="btn btn-primary" id="addCart">Ajouter au panier</button>
        <td><button class="btn btn-primary btn-basket" id="removeCart">Supprimer du panier</button></td>
        </div>`;
    }
    
    // Sur la page produit, ajout d'une liste permmettant la personnalisation du produit
    displayVarnish(){
        let listOption = "";
        for (let varnishChoice of this.custom){
            listOption += `<option>${varnishChoice}</option>`;
        }
        return listOption;
    }
    
    // Affichage des produits dans le panier
    displayBasket() {
        return `<tr>
        
        <td><img class='basketImg' src='${this.img}'></td>
        <td>${this.name}</td>
        <td>${this.quantity}</td>
        <td>${this.price} €</td>
        <td>${this.totalPrice()} €</td>
        </tr>`;
    }
    
    // calcul prix total d'un produit en fonction de la quantitée
    totalPrice(){
        return this.price * this.quantity;
    }
}
