# Analizador de Texto
## Introducción
El Analizador de Texto es una aplicación que permite a los usuarios obtener métricas de un texto, como el conteo de palabras, el conteo de caracteres, el conteo de números, etc. Esto facilita la comprensión de los textos y proporciona información útil sobre su contenido.

## Autora: Rosario Trillo Allende
## Tecnologías Utilizadas:
- HTML
- CSS
- JavaScript

## Funcionalidades
La aplicación permite a los usuarios ingresar texto en un cuadro de entrada y proporciona métricas en tiempo real. A continuación, se describen las principales funcionalidades:

- Conteo de palabras: Muestra el recuento de palabras en el texto ingresado.
- Conteo de caracteres: Muestra el recuento de caracteres en el texto ingresado, incluyendo espacios y signos de puntuación.
- Conteo de caracteres sin espacio:  Muestra el recuento de caracteres excluyendo espacios y signos de puntuación.
- Longitud media de las palabras: Muestra la longitud media de las palabras en el texto.
- Conteo de números: Muestra el conteo de números encontrados en el texto.
- Suma de números: Muestra la suma de todos los números, incluyendo los decimales, encontrados en el texto.

### Uso de HTML

La aplicación utiliza HTML de manera semántica, incluyendo elementos como:

- `<header>` para el título del proyecto.
- `<textarea>` para el cuadro de texto de entrada.
- `<ul>` y `<li>` para mostrar las métricas.
- `<button>` para permitir la limpieza del cuadro de texto.
- `<footer>` para mostrar la información del desarrollador.

### Uso de CSS
Se utiliza CSS para dar estilo a la aplicación, incluyendo selectores de tipo, de clase, de atributo y de ID, así como propiedades del modelo de caja como border, margen y padding.

### Uso de JavaScript
La aplicación hace uso de selectores del DOM, con querySelector y getElementById. Se tiene un manejo de eventos del DOM con un Event Listener para escuchar un evento "input" del <textarea> para actualizar las métricas cuando se escriba en el cuadro de texto.Y un evento "click" del <button> que limpia el contenido de la caja de texto. la aplicación hace uso del atributo textContent o innerHTML para atualizar las métricas de los <li>.
La aplicación hace uso de tipos de datos primitivos, cadena de caracteres, uso de variables, uso de condicionales, uso de bucles y funciones. Dentro de estas funciones tenemos:

| Funciones | Descripción
| ------ | ------ |
|  getWordCount |  Para calcular el recuento de palabras de un texto.
| getCharacterCount | Para calcular el recuento de caracteres de un texto.
| getCharacterCountExcludingSpaces |  Para calcular el recuento de caracteres excluyendo espacios y signos de puntuación de un texto.
| getNumbersCount | Para contar cúantos números hay en un texto.
| getNumbersSum |  Para la suma de los números en un texto.
| getAverageWordLength | Para la suma longitud media de los números en un texto.

## Cómo Usar

1. Abre el Analizador de Texto en tu navegador.
2. Ingresa o pega el texto que deseas analizar en el cuadro de entrada.
3. Las métricas se actualizarán en tiempo real a medida que escribas o modifiques el texto.

## Diseño
El diseño de la aplicación busca ser sobrio y fácil de usar, brindando una experiencia agradable al usuario. Se utilizó Canva para crear un prototipo de baja fidelidad.

## Créditos
* _La imagen de fondo utilizada en la aplicación es de [Marisa_Sias] (https://pixabay.com/es/users/marisa_sias-526173/)_ en [Pixabay] (https://pixabay.com/es/photos/paginas-las-p%C3%A1ginas-del-libro-3554116/)
* [Canva] (https://www.canva.com/design/DAFuhTvewHI/FmUVGOj-OEPW9YNbS9H6kA/edit?utm_content=DAFuhTvewHI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)_