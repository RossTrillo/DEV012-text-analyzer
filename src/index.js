import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Iniciar los conteos en 0
document.querySelector(".palabras").innerHTML="Conteo de palabras:"+ 0;

document.querySelector(".caracteres").innerHTML="Conteo de caracteres:"+ 0;

document.querySelector(".caracterestotales").innerHTML="Caracteres totales:"+ 0;

document.querySelector(".numeros").innerHTML="Conteo de números:"+ 0;

document.querySelector(".suma").innerHTML="Suma de números:"+ 0;

document.querySelector(".longitud").innerHTML="Longitud media:"+ 0;

let conteoTexto = document.querySelector("textarea[name='user-input']");
conteoTexto.addEventListener("input",actualizar);

function actualizar(e) {
    document.querySelector(".caracteres").innerHTML="Conteo de caracteres:"+ analyzer.getCharacterCount(e.target.value);
}

let boton = document.getElementById("reset-button");
let limpiar = document.querySelector("textarea[name='user-input']");

boton.addEventListener("click",function() {
    limpiar.value = ""
    document.querySelector(".caracteres").innerHTML="Conteo de caracteres:"+ 0;
})





