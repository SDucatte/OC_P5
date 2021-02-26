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
var checkAdress = document.getElementById('address');
var checkCity = document.getElementById('city');
var checkEmail = document.getElementById('mail');



// Stockage dans des variables des spans qui accueilleront le message d'erreur
var errorName = document.getElementById('error-name');
var errorNickname = document.getElementById('error-nickname');
var errorAdress = document.getElementById('error-adress');
var errorCity = document.getElementById('error-city');
var errorEmail = document.getElementById('error-mail');

// Stockage des expressions régulières pour la validation


// Evénements liés à la soumission du formulaire
// Récupération du bouton et ajout du gestionnaire d'événement qui exécutera les vérifications avant l'envoi des données au server

var validation = document.getElementById('command');

validation.addEventListener('click', function() {
    let valid = true;
    // Définition des expressions régulières qui vont déterminer le format de données attendues
    let myRegexLetter = /^[a-zA-Z-\s]+$/;
    let myRegexMail = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    let myRegexAddress = /^[a-zA-Z0-9-\s]+$/;
    
    // Selection de tous les inputs du formulaire
    let myInput = document.querySelectorAll('.error-input');
    
    // Boucle qui vérifie la validité des données
    myInput.forEach(function (input) {
        // Vérifie si le champs est vide
        if (input.value == ""){
            let errorMessage = document.querySelector(`#error-${input.id}`);
            errorMessage.textContent = "Ce champs est obligatoire !";
            valid = false;
            
        } else {
            
            if (input.type == "email") {
                // Vérifie le champs adresse mail
                if (myRegexMail.test(input.value) == false){
                    let errorMessage = document.querySelector(`#error-${input.id}`);
                    errorMessage.textContent = "Ce champs est une adresse mail ! ";
                    valid = false;
                } 
                // Vérifie le champs nom, prénom et ville
            } else if (myRegexLetter.test(input.value) == false) {
                let errorMessage = document.querySelector(`#error-${input.id}`);
                errorMessage.textContent = "Ce champs ne doit comporter que des lettres";
                valid = false;
                // Vérifie le champs adresse
            }     else if (myRegexAddress.test(input.value) == false) {
                let errorMessage = document.querySelector(`#error-${input.id}`);
                errorMessage.textContent = "Ce champs ne doit comporter que des lettres et/ou des chiffres !";
                valid = false;
            }

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
                
            }).catch((resultFailed) => {
                var resultFailed = "Oups, une erreur s'est produite !";
                alert (resultFailed);
                
            });
        }
    });
    
    
    /* 
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
        
        let inputNNC = document.querySelectorAll('#form_1 input');
        let myRegexNNC = /^[a-zA-Z-\s]+$/;
        let myRegexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        
        
        
        if (myRegexNNC.test(checkName.value) == false){
            event.preventDefault();
            errorName.textContent = 'Il semblerait que la donnée saisie soit incorrect !';
        } 
        else {
            
        }
        if (myRegexNNC.test(checkNickname.value) == false){
            event.preventDefault();
            errorNickname.textContent = 'Il semblerait que la donnée saisie soit incorrect !';
        }
        else {
            
        }
        if (myRegexNNC.test(checkAdress.value) == false){
            event.preventDefault();
            errorAdress.textContent = 'Il semblerait que la donnée saisie soit incorrect !';
        }
        else {
            
        }
        if (myRegexNNC.test(checkCity.value) == false){
            event.preventDefault();
            errorCity.textContent = 'Il semblerait que la donnée saisie soit incorrect !';
        }
        else {
            
        }
        if (myRegexNNC.test(checkEmail.value) == false) {
            event.preventDefault();
            errorEmail.textContent = 'Il semblerait que la donnée saisie soit incorrect !';
        } else {
            
        }
        
        */