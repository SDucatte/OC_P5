

let form = document.getElementById('form_1');

let email = document.getElementById('email');

email.setCustomValidity("Oups, il semblerait que votre email ne soit pas valide")

let error = document.querySelector('.error');

email.addEventListener("keyup", function (event) {
    if (!email.checkValidity()) {
        email.className = "form-control error"; 
    } else {
        email.className = "form-control";
    }
    }, false);

form.addEventListener("submit", function (event) {
    if (!email.reportValidity()) {
   

    event.preventDefault();
  }
}, false);
    
   
