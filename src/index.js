import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//function caracteresTotales (texto = '') {
    //if (typeof texto !== 'string') return 'El valor ingresado no es una cadena' ;
    //if (texto === '') return 'No ha ingresado ningín valor';
    //return texto.length;
//}

//console.log(caracteresTotales('H1_34¨´+'));
window.alert("Bienvenido a mi pagina")

function counText() {
    let text = document.form_main.text.value;
    document.getElementById('word-count').innerHTML = text.length;
}