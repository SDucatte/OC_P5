appelAjax({}).then((result) => {
    let div = document.getElementById('one-product');

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

const getUrl = window.location.search;
console.log(getUrl);
