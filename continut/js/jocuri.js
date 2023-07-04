function incarcaJocuri(){

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        detalii(this);
        
    }
    };
    xmlhttp.open("GET", "resurse/jocuri.xml", true);
    xmlhttp.send();
}



function incarcaJoc(numeJoc){

    var xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        joc(this,numeJoc);
        
    }
    };
    xmlhttp.open("GET", "resurse/jocuri.xml", true);
    xmlhttp.send();
}


function detalii(xml){

    var i;
    var xmlDoc = xml.responseXML;
    
    var table =
    `<tr><th>Nume</th><th>Nota</th><th>Gen</th><th>Studio</th><th>Restrictie varsta</th>
    </tr>`;


    var x = xmlDoc.getElementsByTagName("joc");
    for(i=0; i<x.length; i++){
        table+= "<tr><td>" +
                        x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue + "</td><td>" +
                        x[i].getElementsByTagName("nota")[0].childNodes[0].nodeValue + "</td><td>" +
                        x[i].getElementsByTagName("gen")[0].childNodes[0].nodeValue + "</td><td>" +
                        x[i].getElementsByTagName("studio")[0].childNodes[0].nodeValue + "</td><td>" +
                        x[i].getElementsByTagName("restrictie")[0].childNodes[0].nodeValue + "</td></tr>";
            
    }
    document.getElementById("wait").innerHTML = "";
    
    document.getElementById("jocT").innerHTML = table;
    
 
}

function joc(xml,numeJoc)
{

    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("joc");
    for(i=0; i<x.length; i++){
        var joc = x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
        var nota = x[i].getElementsByTagName("nota")[0].childNodes[0].nodeValue;
        var gen = x[i].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
        var studio = x[i].getElementsByTagName("studio")[0].childNodes[0].nodeValue;
        var restrictie = x[i].getElementsByTagName("restrictie")[0].childNodes[0].nodeValue;
        //var descriere = x[i].getElementsByTagName("descriere")[0].childNodes[0].nodeValue;

        if(joc==numeJoc){
            document.getElementById("Titlu").innerHTML = numeJoc;
            document.getElementById("nota").innerHTML = nota;
            document.getElementById("gen").innerHTML = gen;
            document.getElementById("studio").innerHTML = studio;
            document.getElementById("restrictie").innerHTML = restrictie;
            //document.getElementById("descriere").innerHTML = descriere;
            break;
        }
            
    }


}
