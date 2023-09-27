const analyzer = {  

  //Elimiar espacios, números y signos 
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getWordCount: (text) => {
    const conteoPalabras = text.replace(/[^a-zA-Z\s]/g, '');
    const palabrasSin = conteoPalabras.split(/\s+/);
    const palabrasSinEspacio = palabrasSin.filter(function(palabra) {
      return palabra.length > 0;
    })
    return palabrasSinEspacio.length;
  },
 
  //return text.length;
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      count++;
    }
    return count; 
  },

  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {
    const conteoCaracteres = text.replace(/[^0-9a-zA-Z]/g, '');
    const conteoCaracteresSin = conteoCaracteres.replace(/\s+/g, '');
    return conteoCaracteresSin.length;
  },

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {
    const conteoPalabra = text.split(/\s+/);
    const promedioCaracteres = text.replace(/\s+/g, '');
    const longituMedia = promedioCaracteres.length / conteoPalabra.length;
    const palabraRedondeanda = longituMedia.toFixed(2);
    return parseFloat(palabraRedondeanda);

  },

  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const numerosEncontrados = text.match(/\b\d+(\.\d+)?\b/g);
    if (numerosEncontrados) {
      return numerosEncontrados.length;
    } else {
      return 0;
    }
  },
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const sumaNum = text.match(/(?:^|\s)\d+\.\d+|\d+\b/g);
    if (!sumaNum) {
      return 0;
    }
    const sumaNumerosTotales = sumaNum.reduce((acumulador, numero) => {
      return acumulador + parseFloat(numero);
    }, 0);
    return sumaNumerosTotales;
    
  },
};

export default analyzer;
