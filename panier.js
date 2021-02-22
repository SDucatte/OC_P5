// Récupération localstorage
let basket = localStorage.getItem("basket");
basket = JSON.parse(basket);

// Récupération élément où afficher le panier
let showBasket = document.getElementById("show-basket");

// Boucle pour afficher les produits du panier
for (let productInBasket of basket) {
    let product = new Product(productInBasket); 
    showBasket.innerHTML += product.displayBasket();
}

// Affichage prix total du panier
document.getElementById('total').innerHTML = basketManager.total();


// Stockage dans des variables de tous les inputs du formulaire
var checkName = document.getElementById('name');
var checkNickname = document.getElementById('nickname');
var checkAdress = document.getElementById('adresse');
var checkCity = document.getElementById('ville');
var checkEmail = document.getElementById('email');

// Evénements liés à la soumission du formulaire
// Récupération du bouton et ajout du gestionnaire d'événement qui exécutera les vérifications avant l'envoi des données au server
var validation = document.getElementById('command');
validation.addEventListener('click', function () {
    let valid = true;
    
    // Boucle qui vérifie tous les input du formulaire
    document.querySelectorAll('#form_1 input').forEach(function (element) {
        if (valid) {
            // Vérifie que la méthode reportValidity renvoie true à tous les élements vérifiés
            valid &= element.reportValidity();
        }
    });
    
    if(valid){
        // Stockage des données envoyées au server (données utilisateurs + panier) dans une variable
        let dataCustomer = {
            //Données utilisateur
            contact: {
                firstName: checkName.value,
                lastName: checkNickname.value,
                address: checkAdress.value,
                city: checkCity.value,
                email: checkEmail.value
            },
            // Données panier
            products: basketManager.basket.map(product => product.id)
        }
        
        // Appel de notre requête 
        appelAjax(
            // Modification des paramètres par défaut
            {
                api : '/furniture/order',
                method: "POST",
                listHeader: [
                    { "name": "content-type", "value": "application/json" }
                ],
                status : 201,
                data : JSON.stringify(dataCustomer)
            }
            ).then((result) => {
                // Chargement de la page commande contenant dans l'url l'orderId
                window.location.assign(`commande.html?orderId=${result.orderId}`);
                
            })
        }
    });
    
    