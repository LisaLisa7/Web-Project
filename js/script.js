function getDate(){
    setInterval(getDate, 1000);
    var currentdate = new Date(); 
    var data = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  ~  "  
    
    const oraCurenta = new Date();

    window.document.getElementById('date_p').innerHTML = data + oraCurenta.toLocaleTimeString();
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
    var culoare1 = document.getElementById("contur_c");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = culoare1;
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
    

}


function callAll(){
    getDate();
    getURL();
    getLocation();
    getBrowser();
    getOS();
    
}