// Requete AJAX générique
function appelAjax(options) {
    // Définition des paramètres par défaut de la requete AJAX
    var defaultOption = {
        "api": "/furniture",
        "method": "GET",
        "status": 200,
        "data": null,
        "listHeader": []
    }

    // Utilisation de la méthode Object.assign qui permettra de modifier les options par défaut
    options = Object.assign(defaultOption, options);

    // Création d'une promise contenant notre appel AJAX
    return new Promise((resolve, reject) => {
        // Création d'un objet XMLHttprequest 
        let request = new XMLHttpRequest();

        // Suivi de l'état et du statut de la requete
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == options.status) {
                resolve(JSON.parse(this.responseText));

            } else if (this.readyState == XMLHttpRequest.DONE && this.status != options.status) {
                reject(JSON.parse(this.responseText));
            }
        };
        // Intanciation de la requete 
        request.open(options.method, "http://localhost:3000/api" + options.api);
        for (let header of options.listHeader) {
            request.setRequestHeader(header.name, header.value);
        }
        // Envoi de la requete
        request.send(options.data);
    })
}
