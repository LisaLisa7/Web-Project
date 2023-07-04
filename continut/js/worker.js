onmessage = function(event){
    if(event.data === "adauga"){
        console.log("am primit notificare");
        this.self.postMessage("trimit inapoi");
    }
}