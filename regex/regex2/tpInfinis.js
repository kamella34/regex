let login = document.querySelector(".Login");
let passeword = document.querySelector(".passeword");
let button = document.querySelector(".button")
let para = document.querySelector(".para");
let section = document.querySelector(".sec");
let ul = document.querySelector(".ul");
let div = document.querySelector(".div");

let para0 = document.querySelector(".para0");
let div0 = document.querySelector(".div0");


function verifLogin() {

    regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regexMail.test(login.value)) {
        div0.setAttribute("style", "border:solid green");
        login.style.backgroundColor = "green";
        div0.append(para0);
        para0.textContent = "Le login est valide";

    } else {
        div0.setAttribute("style", "border:solid red");
        login.style.backgroundColor = "red";
        div0.append(para0);
        para0.textContent = "Le login est invalide";
    }
}


function verifPasseword() {
    regexLetter = /(?=.*[A-z])/;
    regexNumber = /(?=.*[0-9])/;
    regexCaracterSpecial = /(?=.*[$@_%?;,:!.])/;
    regexLongeur = /\S{6,15}$/;
    regexPass = /(?=.*[A-z])(?=.*[0-9])(?=.*[$@_%?;,:!.])\S{6,15}$/;

    let lis = document.querySelectorAll("li");

    // if (lis.length != 0) {
    //     ul.innerHTML = "";
    // } ou

    if (lis != null) {
        ul.innerHTML = "";
    }

    if (!regexLetter.test(passeword.value)) {

        div.setAttribute("style", "border :solid red");
        para.textContent = "Le passeword est invalide";
        let liLettre = document.createElement("li");
        ul.append(liLettre);
        liLettre.textContent = "Passeword doit contenir au moins une lettre";

    }
    if (!regexNumber.test(passeword.value)) {

        div.setAttribute("style", "border :solid red");
        para.textContent = "Le passeword est invalide";
        let liNumber = document.createElement("li");
        ul.append(liNumber);
        liNumber.textContent = "Passeword doit contenir au moins un chiffre";

    }
    if (!regexCaracterSpecial.test(passeword.value)) {

        div.setAttribute("style", "border :solid red");
        para.textContent = "Le passeword est invalide";
        let liCaractSpe = document.createElement("li");
       ul.append(liCaractSpe);
        liCaractSpe.textContent = "Passeword doit contenir au moins un caractére special";

    }
    if (!regexLongeur.test(passeword.value)) {

        div.setAttribute("style", "border :solid red");
        para.textContent = "Le passeword est invalide";
        let liLongeur = document.createElement("li");
        ul.append(liLongeur);
        liLongeur.textContent = "Passeword doit contenir au moins entre 6 et 15 caractères";

    }

    if (regexPass.test(passeword.value)) {
        div.setAttribute("style", "border :solid green");
        para.textContent = "Le passeword est valide";
    }


   
}


login.addEventListener("blur", function () {
    verifLogin();

});

passeword.addEventListener("blur", function () {
    verifPasseword();

});


