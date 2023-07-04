function verificare(user,parola){

    var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "resurse/utilizatori.json", false);
	xmlhttp.send();

	var users = JSON.parse(xmlhttp.responseText);
	var userr = users.find(u => u.utilizator === user);

	if(!userr){
        console.log("eroare!users");
		return -1;
        
	}

	if(userr.parola === parola){
        console.log("parola buna");
		return 1;
	}

	return 0;
}

function vf(user,parola){

    var ver = verificare(user,parola)
    //console.log("eroare!verificare");
    switch(ver){
		case -1:
			document.getElementById("stare").style.visibility="visible";
        	document.getElementById("stare").style.color = "red";
        	document.getElementById("stare").innerHTML = "Username/Parola gresita!";
			break;

		case 0:
			document.getElementById("stare").style.visibility="visible";
            document.getElementById("stare").style.color = "red";
            document.getElementById("stare").innerHTML = "Username/Parola gresita!";
			break;

		case 1:
            youMayPass()
			document.getElementById("stare").style.visibility="visible";
            document.getElementById("stare").style.color = "green";
            document.getElementById("stare").innerHTML = "Ok";
			break;
		
		default:
			console.log("eroare!");
	}
    
    
}


function inregistreazaInfoGenerale(){
    const a = {
        utilizator: "",
        parola: "",
        nume: "",
        prenume: "",
        email: "",
        telefon: "",
        sex: "",
        dataNastere: "",
        oraNastere: "",
        varsta: "",
        culoarePreferata: "",
        blog: "",
        descriere: "",
        
    }
    const url = "api/utilizatori"
    a.utilizator = document.getElementById('user').value;
    a.parola = document.getElementById('pass').value;
    a.nume = document.getElementById('nume').value;
    a.prenume = document.getElementById('prenume').value;
    a.email = document.getElementById('email').value;
    a.telefon = document.getElementById('phone').value;
    a.sex = document.getElementById('sex').value;
    a.dataNastere = document.getElementById('dataNastere').value;
    a.oraNastere= document.getElementById('oraNastere').value;
    a.varsta = document.getElementById('varsta').value;
    a.culoarePreferata= document.getElementById('culoarePref').value;
    a.blog = document.getElementById('blog').value;
    a.descriere = document.getElementById('descriere').value;

    const userJSON = JSON.stringify(a);


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST',url,true)
    xmlhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xmlhttp.send(userJSON);

    xmlhttp.onload = function (){
        if(xmlhttp.status == 200){
            console.log("Succes")
            
        }
    }
}



function youMayPass(){
    document.getElementById('navBar').style.display ="block";
}
