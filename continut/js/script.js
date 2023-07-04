function getDate(){

    if(document.getElementById('date_p')){

    
        setInterval(getDate, 1000);
        var currentdate = new Date(); 
        var data = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + "  ~  "  
        
        const oraCurenta = new Date();

        window.document.getElementById('date_p').innerHTML = data + oraCurenta.toLocaleTimeString();
    }
}

function getURL(){
    window.document.getElementById("url_p").innerHTML = window.location.href; 
}

function getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        window.document.getElementById("location_p").innerHTML = "Localizarea nu este suportată de acest browser.";
    }
}

function showPosition(position) {
    window.document.getElementById("location_p").innerHTML = "<strong>Latitudine: </strong>" + position.coords.latitude +
    "<br><strong>Longitudine: </strong>" + position.coords.longitude;
}


function getBrowser(){
    var name = window.navigator.appName;
    var version = window.navigator.appVersion;

   window.document.getElementById("browser_p").innerHTML = "<strong>Nume: </strong> " + name + "<br><strong>Versiune:</strong> " + version
}
function getOS(){
    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

    window.document.getElementById("os_id").innerHTML = OSName;
}

function draw(){
    var c = document.getElementById("desen");
    var culoare1 = document.getElementById("contur_c").value;
    var culoare2 = document.getElementById("fill_c").value;
    var ctx = c.getContext("2d");
    
    ctx.beginPath();
    ctx.strokeStyle = culoare1;
    ctx.fillStyle = culoare2;
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
    ctx.fill();
}

function rect(){
    draw()
}

function addLinie(){
    var t = document.getElementById("tabel");
    var pozitie = window.document.getElementById("poz").value;
    var culoare = document.getElementById("culoareTabel").value;
    var row = t.insertRow(pozitie);

   
    for (var i = 0; i < t.rows[0].cells.length; i++) {
        var c = row.insertCell(i);
        c.style.backgroundColor = culoare;
        c.innerHTML = "New cell";
    }

}

function addColoana(){
    var t = document.getElementById('tabel'); // table reference
    var culoare = document.getElementById("culoareTabel").value;

    for (var i = 0; i < t.rows.length; i++) {
        
        var c = t.rows[i].insertCell(t.rows[i].cells.length);
        c.style.backgroundColor = culoare;
        c.innerHTML = "New cell";

    }
}

function schimbaContinut(numeResursa)
{
    var pagina = numeResursa + '.html';
    var xttp = new XMLHttpRequest();
    xttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("continut").innerHTML = this.responseText;
        }
    };
    xttp.open("GET",pagina,true);
    xttp.send();
    

    //document.getElementById("m").innerHTML = "ok!";
}

function schimbaContinut2(numeResursa,jsFisier,jsFunctie)
{
    var pagina = numeResursa + '.html';
    var xttp = new XMLHttpRequest();
    xttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("continut").innerHTML = this.responseText;
            if (jsFisier) {
                var elementScript = document.createElement('script');
                elementScript.onload = function () {
                console.log("hello");
                if (jsFunctie) {
                window[jsFunctie]();
                }
                };
                elementScript.src = jsFisier;
                document.head.appendChild(elementScript);
                } else {
                if (jsFunctie) {
                window[jsFunctie]();
                }
                }
        }
    };
    xttp.open("GET",pagina,true);
    xttp.send();

    
    

    //document.getElementById("m").innerHTML = "ok!";
}

function updateTextInput() {

    var l = document.getElementById('varsta'); 
    document.getElementById('displayV').innerHTML = l.value;
    l.oninput =function(){
        document.getElementById('displayV').innerHTML = this.value;
    }


  }



function callAll(){
    getDate();
    getURL();
    getLocation();
    getBrowser();
    getOS();
}