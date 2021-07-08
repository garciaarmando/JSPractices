const $pLorem = document.getElementById("parrafo");
//texto con etiquetas html que reemplazará al lorem ipsum genérico
let text = `   <p id="outerHTML">
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>`;

$pLorem.textContent = text; //se injecta la variable texto al párrafo del html, aunque mostrará las etiquetas p,i,b etc, es decir, renderiza como si se tratara de texto, no en sintaxis html

//para que el contenido de la variable texto se inyecte como html, se debe usar el método innerHTML
$pLorem.innerHTML = text;

/* //Se debe decidir usar textContent cuando se requiera recibir sólo texto e innerHTML cuando se desee permitir la inserción de HTML
 */

//outerHTML -> similar a lo que hace React.Fragment en React. Su función es reemplazar el elemento del dom que le precede por el nuevo fragmnento de código
$pLorem.outerHTML = text;