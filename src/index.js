import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Iniciar los conteos en 0
document.querySelector("li[data-testid='word-count']").textContent="Contador de palabras:" + 0;

document.querySelector("li[data-testid='character-count']").innerHTML="Conteo de caracteres:"+ 0;

document.querySelector("li[data-testid='character-no-spaces-count']").innerHTML="Conteo de caracteres sin espacio:"+ 0;

document.querySelector("li[data-testid='number-count']").innerHTML="Conteo de números:"+ 0;

document.querySelector("li[data-testid='number-sum']").innerHTML="Suma de números:"+ 0;

document.querySelector("li[data-testid='word-length-average']").innerHTML="Longitud media de palabras:"+ 0;

//Limpiar botón
let botones = document.getElementById("reset-button");
let textarea = document.querySelector("textarea[name='user-input']");

botones.addEventListener("click",function() {
        textarea.value = "";
        })

// CONTEO PALABRAS
let primero = document.querySelector("li[data-testid='word-count']");      
   // let conteoPalabritas = analyzer.getWordCount("ROSARIO TRILLO");

textarea.addEventListener("input" , function(){
    let conteoPalabritas = analyzer.getWordCount(textarea.value);
    primero.textContent = "Conteo de palabras: " + conteoPalabritas;
        })

// CONTEO CARACTERES
let segundo = document.querySelector("li[data-testid='character-count']");
//let textareaCaracteres = document.querySelector("textarea[name='user-input']");

textarea.addEventListener("input" , function() {
    let conteoCaracateress = analyzer.getCharacterCount(textarea.value);
        segundo.textContent = "Conteo de caracteres: " + conteoCaracateress;
        })


//CONTEO CARACTERES SIN ESPACIO
let tercero = document.querySelector("li[data-testid='character-no-spaces-count']");

textarea.addEventListener("input", function() {
    let conteoCaracteresSinEspacio = analyzer.getCharacterCountExcludingSpaces(textarea.value);
    tercero.textContent = "Conteo caracteres sin espacio: " + conteoCaracteresSinEspacio;
})

//Conteo de números:
let cuarto = document.querySelector("li[data-testid='number-count']");

textarea.addEventListener("input", function(){
    let conteoNumeros= analyzer.getNumberCount(textarea.value);
    cuarto.textContent = "Conteo de números: " + conteoNumeros;
})

//Suma de números:
let quinto = document.querySelector("li[data-testid='number-sum']");

textarea.addEventListener("input", function () {
    let sumaNumeros = analyzer.getNumberSum(textarea.value);
    quinto.textContent = "Suma de números: " + sumaNumeros;
})

// Longitud media

let sexto = document.querySelector("li[data-testid='word-length-average']");

textarea.addEventListener("input", function() {
    let longitudMedia = analyzer.getAverageWordLength(textarea.value);
    sexto.innerHTML = "Longitud media de palabras: " + longitudMedia;
});




