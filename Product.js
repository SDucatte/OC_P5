class Product {
    constructor(produit) {
        if (produit.quantity != undefined){
            this.fromBasket(produit);
        } else {
            this.fromApi(produit);
        }
    }
    
    fromApi(produit){
        this.id = produit._id;
        this.name = produit.name;
        this.img = produit.imageUrl;
        this.custom = produit.varnish;
        this.description = produit.description;
        this.quantity = 1;
        this.price = produit.price/100;
        
    }
    
    fromBasket(produit){
        this.id = produit.id;
        this.name = produit.name;
        this.img = produit.img;
        this.custom = produit.custom;
        this.description = produit.description;
        this.quantity = produit.quantity;
        this.price = produit.price;
    }
    
    displayList() {
        return `<a href="produit.html?id=${this.id}" class='card link'>
        <h2 class='card-header'>${this.name}</h2>
        <img class='image card-img-top' src='${this.img}'>
        <p class='card-subtitle'>${this.description}</p>
        <p class='card-text'>${this.price} €</p>
        </a>`;
    }
    
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
        <button class="btn btn-primary" id="removeCart">Enlever du panier</button>
        </div>`;
    }
    
    displayVarnish(){
        let listOption = "";
        for (let varnishChoice of this.custom){
            listOption += `<option>${varnishChoice}</option>`;
        }
        return listOption;
    }
    
    // affichage produit dans le panier (à faire en dernier)
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
