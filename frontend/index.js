appelAjax({}).then((result) => {
    let div = document.getElementById('product-content');
    
    for (let product of result) {
        var card = `<a class='card link' href='produit.html?id=${product._id}'>
        <h2 class='card-header'>${product.name}</h2>
        <img class='image card-img-top' src='${product.imageUrl}'>
        <p class='card-subtitle'>${product.description}</p>
        <p class='card-text'>${product.price} €</p>
        </a>`;
        
        div.innerHTML += card;
    }
    
})
















/*
for (let product of result) {
    var oneProduct = `<h2 class='card-header'>${product.name}</h2>
    <img class='image card-img-top' src='${product.imageUrl}'>
    <p class='card-subtitle'>${product.description}</p>
    <p class='card-text'>${product.price} €</p>
    </a>`;
    
    otherDiv.innerHTML += oneProduct;
}
showProduct({}).then((result) => {
    let otherDiv = document.getElementById('product-content');
    
    for (let product of result) {
        var oneProduct = `<h2 class='card-header'>${product.name}</h2>
        <img class='image card-img-top' src='${product.imageUrl}'>
        <p class='card-subtitle'>${product.description}</p>
        <p class='card-text'>${product.price} €</p>
        </a>`;
        
        otherDiv.innerHTML += oneProduct;
    }
})


let card = document.createElement('a');
card.setAttribute('class', 'card');
card.style.width = '100%';
card.setAttribute('href', 'produit.html?id=' + product._id);
let title = document.createElement('h2');
title.setAttribute('class', 'card-header')
title.innerHTML = product.name;
card.appendChild(title);
let img = document.createElement('img');
img.setAttribute('class', 'image');
img.setAttribute('src', product.imageUrl);
img.setAttribute('class', 'card-img-top')
img.style.width = '100%';
card.appendChild(img);
let description = document.createElement('p');
description.setAttribute('class', 'card-subtitle');
description.innerHTML = product.description;
card.appendChild(description);
let price = document.createElement('p');
description.setAttribute('class', 'card-text');
price.innerHTML = product.price + ' €';
card.appendChild(price);
div.appendChild(card);
*/




/*
let choix = document.createElement('select');
choix.innerHTML = "Personnaliser votre produit";
div.appendChild(choix);

let list = document.querySelector('select');
let choixVernis = document.createElement('option');
choixVernis.innerHTML = product.varnish;
list.appendChild(choixVernis);


// Afficher les données

function Product(name, imageUrl, varnish, description, price) {
    this.name = name; 
    this.imageUrl = imageUrl;
    this.varnish = varnish;
    this.description = description;
    this.price = price;
}
*/
