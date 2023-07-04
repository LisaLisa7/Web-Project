class Produs {
    constructor(id,nume, cantitate) {
      this.id = id;
      this.nume = nume;
      this.cantitate = cantitate;
    }
  }

  var id = 0;

function adaugaProdus(){

    document.getElementById("imgAdauga").style.display="inline";
    id = id + 1;
    var t = document.getElementById("cumparaturi");
    
    pozitie = t.rows.length;
    var row = t.insertRow(pozitie);

    prod = document.getElementById('prod').value;
    cant = document.getElementById('cant').value;
    //id = pozitie;

    const worker = new Worker("/js/worker.js");
    worker.postMessage("adauga");
    

    const p = new Produs(id,prod,cant);
    localStorage.setItem("Produs",JSON.stringify(p));

    var stored = localStorage.getItem("Produs");
    var item = JSON.parse(stored);


    var c = row.insertCell(0);
    c.innerHTML = pozitie;
    c = row.insertCell(1);
    c.innerHTML = p.nume;
    c = row.insertCell(2);
    c.innerHTML = p.cantitate;
    console.log(item);

    worker.onmessage = function(event){
      console.log("Mesaj de la worker: ",event.data);
    }

}

