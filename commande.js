// Permet de récuperer le paramètre orderId qui a été passé en url

let urlId = window.location.search;
let urlParams = new URLSearchParams(urlId);
let orderId = urlParams.get('orderId');

// Récupération de l'item qui acceuillera l'orderId puis à ajouter de l'orderId généré suite à la commande

var orderNumber = document.getElementById('orderNumber');
orderNumber.innerHTML = orderId;