import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Limpiar botón y contador en 0
const botones = document.getElementById("reset-button");
const textarea = document.querySelector("textarea[name='user-input']");
const inConteoPalabras = document.querySelector("li[data-testid='word-count']");
const inConteoCaracteres = document.querySelector("li[data-testid='character-count']");
const inConteoCaracteresSin = document.querySelector("li[data-testid='character-no-spaces-count']");
const inConteoNumeros = document.querySelector("li[data-testid='number-count']");
const inSumaNumeros = document.querySelector("li[data-testid='number-sum']");
const inLongitudMedia = document.querySelector("li[data-testid='word-length-average']");

botones.addEventListener("click",function() {
  textarea.value = "";
  inConteoPalabras.textContent = "Conteo de palabras: " + 0;
  inConteoCaracteres.innerHTML = "Conteo de caracteres: " + 0;
  inConteoCaracteresSin.innerHTML = "Conteo de caracteres sin espacio: " + 0;
  inConteoNumeros.innerHTML = "Conteo de números: " + 0;
  inSumaNumeros.innerHTML = "Suma de números: " +0;
  inLongitudMedia.innerHTML = "Longitud media de palabras: " +0;
})

// CONTEO PALABRAS
const primero = document.querySelector("li[data-testid='word-count']");      

textarea.addEventListener("input" , function(){
  const conteoPalabritas = analyzer.getWordCount(textarea.value);
  primero.textContent = "Conteo de palabras: " + conteoPalabritas;
})

// CONTEO CARACTERES
const segundo = document.querySelector("li[data-testid='character-count']");

textarea.addEventListener("input" , function() {
  const conteoCaracateress = analyzer.getCharacterCount(textarea.value);
  segundo.textContent = "Conteo de caracteres: " + conteoCaracateress;
})


//CONTEO CARACTERES SIN ESPACIO
const tercero = document.querySelector("li[data-testid='character-no-spaces-count']");

textarea.addEventListener("input", function() {
  const conteoCaracteresSinEspacio = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  tercero.textContent = "Conteo de caracteres sin espacio: " + conteoCaracteresSinEspacio;
})

//Conteo de números:
const cuarto = document.querySelector("li[data-testid='number-count']");

textarea.addEventListener("input", function(){
  const conteoNumeros= analyzer.getNumberCount(textarea.value);
  cuarto.textContent = "Conteo de números: " + conteoNumeros;
})

//Suma de números:
const quinto = document.querySelector("li[data-testid='number-sum']");

textarea.addEventListener("input", function () {
  const sumaNumeros = analyzer.getNumberSum(textarea.value);
  quinto.textContent = "Suma de números: " + sumaNumeros;
})

// Longitud media
const sexto = document.querySelector("li[data-testid='word-length-average']");

textarea.addEventListener("input", function() {
  const longitudMedia = analyzer.getAverageWordLength(textarea.value);
  sexto.innerHTML = "Longitud media de palabras: " + longitudMedia;
})




