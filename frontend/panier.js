


function initBasket() {
    var basket = localStorage.getItem('basket');
    if(basket != null){
        return JSON.parse(basket);
    } else {
        return [];
    }
}

function addBasket(product) {
    var basket = initBasket();
    localStorage.setItem('basket', JSON.stringify(basket));
    basket.push(product);
    saveBasket(basket);
}



function saveBasket (basket) {
    localStorage.setItem('basket', JSON.stringify(basket));
}


let carts = document.getElementById('addCart');
carts.addEventListener("click", addBasket(product));


    
    
    /*
    
    appelAjax({api: "/furniture/" + oneId}).then((product) => {
        initBasket();
        addBasket();
    })
    
    var btn = document.querySelector('button');
    btn.addEventListener('click', addBasket(product));
    localStorage.getItem(product);
    */