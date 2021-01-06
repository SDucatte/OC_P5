// Requete AJAX générique

function appelAjax(options) {
var defaultOption = {
    "api" : "/furniture", 
    "method" : "GET", 
    "status" : 200, 
    "data" : null, 
    "listHeader" : []
}

options = Object.assign(defaultOption, options);
    return new Promise ((resolve, reject) => {
       let request = new XMLHttpRequest();
   
       request.onreadystatechange = function() {
           if (this.readyState == XMLHttpRequest.DONE && this.status == options.status) {
               resolve(JSON.parse(this.responseText));
             
           } else if (this.readyState == XMLHttpRequest.DONE && this.status != options.status) {
               reject(JSON.parse(this.responseText));
           }
       };
       for (let header of options.listHeader){
           request.setRequestHeader(header.name, header.value);
       }
       request.open(options.method, "http://localhost:3000/api" + options.api);
       request.send(options.data);
   })
   }

/*
appelAjax({
    method : "POST",
    listHeader : [{"name" : "content-type", "value" : "application/json"}, ]
})
*/