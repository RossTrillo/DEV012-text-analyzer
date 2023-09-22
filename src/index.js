import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Iniciar los conteos en 0
document.querySelector("li[data-testid='word-count']").textContent="Contador de palabras:" + 0;

document.querySelector("li[data-testid='character-count']").innerHTML="Conteo de caracteres:"+ 0;

document.querySelector("li[data-testid='character-no-spaces-count']").innerHTML="Conteo de caracteres sin espacio:"+ 0;

document.querySelector("li[data-testid='number-count']").innerHTML="Conteo de números:"+ 0;

document.querySelector("li[data-testid='number-sum']").innerHTML="Suma de números:"+ 0;

document.querySelector("li[data-testid='word-length-average']").innerHTML="Longitud media:"+ 0;

//Limpiar botón
let botones = document.getElementById("reset-button");
let textarea = document.querySelector("textarea[name='user-input']");

botones.addEventListener("click",function() {
        textarea.value = "Ross";
        })

// CONTEO PALABRAS
textarea.addEventListener("input" , function(){
    let primero = document.querySelector("li[data-testid='word-count']");      
    let conteoPalabritas = analyzer.getWordCount("ROSARIO TRILLO");

    primero.textContent = "Conteo de palabras: " + conteoPalabritas;

})

// CONTEO CARACTERES

textarea.addEventListener("input" , function() {
    let segundo = document.querySelector("li[data-testid='character-count']");
    let conteoCaracateress = analyzer.getCharacterCount("Rosario");

    segundo.textContent = "Conteo de caracteres: " + conteoCaracateress;
})


//CONTEO CARACTERES SIN ESPACIO

textarea.addEventListener("input" , function() {
    let tercero = document.querySelector("li[data-testid='character-no-spaces-count']");
    let conteoSinEspacio = analyzer.getCharacterCountExcludingSpaces("Ros@rio");

    tercero.textContent = "Conteo caracteres sin espacio: " + conteoSinEspacio;

})


//Limpiar botón
//let conteoTexto = document.querySelector("textarea[name='user-input']");
//conteoTexto.addEventListener("input",actualizar);

//function actualizar(e) {
  //  document.querySelector("li[data-testid='character-count']").innerHTML="Conteo de caracteres:"+ analyzer.getCharacterCount(e.target.value);
//}
// conteo de caracteres
//let boton = document.getElementById("reset-button");
//let limpiar = document.querySelector("textarea[name='user-input']");

//boton.addEventListener("click",function() {
  //  limpiar.value = ""
    //document.querySelector("li[data-testid='character-count']").innerHTML="Conteo de caracteres:"+ 0;
//})

//conteo de palabras






