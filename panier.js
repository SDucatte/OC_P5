

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
    basket.push(product);
    saveBasket(basket);
}

function saveBasket(basket) {
    localStorage.setItem('product', JSON.stringify(basket));
    
}


appelAjax({api: "/furniture/" + oneId}).then(() => {
    let btn = document.getElementById('addCart');
    btn.addEventListener('click', saveBasket);
})
    /*



    appelAjax({api: "/furniture/" + oneId}).then((product) => {
    let btn = document.getElementById('addCart');
    btn.addEventListener('click', saveBasket(product));
})


function btnClic() {
    let btn = document.getElementById('addCart');
    btn.addEventListener('click', saveBasket());
}


   
appelAjax({api: "/furniture/" + oneId}).then((product) => {
    var basket = localStorage.getItem('basket');
  
})





    
    
  
    
  
    var btn = document.querySelector('button');
    btn.addEventListener('click', addBasket(product));
    localStorage.getItem(product);
    */