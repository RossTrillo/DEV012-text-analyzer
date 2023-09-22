const analyzer = {  

  getWordCount: (text) => {
    let conteoPalabras = text.replace(/[^a-zA-Z\s]/g, '');
    let palabrasSin = conteoPalabras.split(/\s+/);
    const palabrasSinEspacio = palabrasSin.filter(function(palabra) { //No comprendo esta línea de código
      return palabra.length > 0;
    })
    return palabrasSinEspacio.length; 
    //Elimiar espacios, números y signos 
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCount: (text) => {
  return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    let conteoCaracteres = text.replace(/[^0-9a-zA-Z]/g, '');
    let conteoCaracteresSin = conteoCaracteres.replace(/\s+/g, '');
    return conteoCaracteresSin.length;

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
