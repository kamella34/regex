// function upperCase(chaineATester)
// {
//    regexp = /^[A-Z]/;
   
//    if (regexp.test(chaineATester))
//     {
//       console.log("La première lettre est en majuscule");
//     } 
//     else
//     {
//       console.log("La première lettre n'est pas en majuscule");
//     }
// }

// upperCase('Abcd');
// upperCase('abcd');
// -----------------------------------------------------------------------------
// function number(chaineATester)
// {
//    regexp = /[0-9]/;
   
//    if (regexp.test(chaineATester))
//     {
//       console.log("Il y a un chiffre");
//     } 
//     else
//     {
//       console.log("Il n'y a pas de chiffre");
//     }
// }

// number('123');
// number('asz');
// number('az34');

// -----------------------------------------------------------------------------
let p = document.querySelector(".p")
let input = document.querySelector(".input");
let button = document.querySelector(".button");

function nom(){
    regexp = /[A-Z]|[a-z]/;

    if (regexp.test(input.value)){
       alert('ok');
    }else{
        alert('Une erreur est survenue');
    }
}

button.addEventListener('click', function(){
    nom();
})

// -----------------correction--rub------------------
