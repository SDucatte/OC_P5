/* Requête pou récupérer les données du serveur
let request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(request);
    }
};

request.open("GET", "http://localhost:3000/api/furniture");
request.send();


function promise(){
    return new promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                var response = JSON.parse(this.responseText);  
            }
        };
        request.open("GET", "http://localhost:3000/api/furniture");
        request.send();
    });
}
*/

new Promise ((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            resolve(JSON.parse(this.responseText));
          
        } else if (this.readyState == XMLHttpRequest.DONE && this.status != 200) {
            reject(JSON.parse(this.responseText));
        }
    };
    request.open("GET", "http://localhost:3000/api/furniture");
    request.send();
}).then((result) => {
    let div = document.getElementById('product-content');
    for (let product of result) {
        let img = document.createElement('img');
        img.setAttribute('class', 'image');
        img.setAttribute('src', product.imageUrl)
        div.appendChild(img);
    }
})

request('GET',"http://localhost:3000/api/furniture", 200).then((result) => {
    let div = document.getElementById('product-content');
    for (let product of result) {
        let img = document.createElement('img');
        img.setAttribute('class', 'image');
        img.setAttribute('src', product.imageUrl)
        div.appendChild(img);
    }
})




/*


let myImg = document.getElementById('image');

myImg.onload = showImg;

function showImg(){
    
}

// Afficher les données 
*/
