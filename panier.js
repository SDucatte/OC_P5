appelAjax({}).then((result) => {
    let addProduct = document.getElementById('cart-tablebody');
    for (let product of result) {
        let article = document.createElement('th');
        article.innerHTML = product.name;
        addProduct.appendChild(article);
        let articlePrice = document.createElement('th');
        articlePrice.innerHTML = product.price;
        addProduct.appendChild(articlePrice);
        let articleQuantity = document.createElement('th');
        // articleQuantity.innerHTML = product.quantity;
        addProduct.appendChild(articleQuantity);
    }
})