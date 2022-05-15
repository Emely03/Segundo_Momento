/*  La empresa flores pepita necesita desarrollar una página web la cual contenga dos páginas, una página será el login(primera pagina) 
la cual debe de validar si el usuario y la contraseña existe,  la pagina debe de validar si el usuario existe en la siguiente lista de objetos*/

var usuarios =[{"user": "Pikachu","password":"pikachu1234"},{"user": "Bulbasaur","password":"bulbasaur1234"}]

function validar (){
let usuario = document.getElementById ("usuario").value 
let contraseña = document.getElementById ("pass").value 

for(var i = 0; i < usuarios.length; i++){

if (usuario==usuarios[i].user && contraseña==usuarios[i].password ){
    var link= document.createElement ("a");
    link.href="home.html"
    document.body.appendChild(link);
    link.click();
    return;
}
 }

    alert ("Usuario o Contraseña Incorrecto, Por favor Verificar");
    return;

}

