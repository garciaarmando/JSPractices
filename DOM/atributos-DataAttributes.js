console.log(document.documentElement.lang); //nos dará el lenguaje de nuestro archivo HTML

//método getAttribute

console.log(document.documentElement.getAttribute("lang")); //el atributo va entre comillaod

console.log(document.querySelector(".link-dom").href); //http://127.0.0.1:5500/dom.html, toma como parte de la liga lo que la extensión live server coloca para funcionar
console.log(document.querySelector(".link-dom").getAttribute("href")); //dom.html -> resultado correcto

//establecer un nuevo valor con la notación del punto
document.documentElement.lang = "en"; //from 'es' to 'en'

//establecer un nuevo valor con la notación de getAtribute
document.documentElement.setAttribute("lang", "es-MX"); //from en to es-MX

//una buena prácrica del alamcenamiento en variables de elementos del DOM es usar const adicional al $ al inicio, esto para poderlas diferenciar de las otras constantes
const $linkDOM = document.querySelector(".link-dom");

//estableciendo valores que no se tienen de inicio en el HTML, en este caso la instrucción de que el link se abra en una nueva pestaña
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://google.com"); //cambiando el href
//podemos validar si determinado elemento cuenta o no con determinado atributo, obteniendo como resultado un boolean
console.log($linkDOM.hasAttribute("rel")); //true
//también se pueden eliminar atributos vía removeAtribute
$linkDOM.removeAttribute("rel"); //se elimina rel
console.log($linkDOM.hasAttribute("rel")); //false porque fue eliminado con removeAttribute

console.log("*******************DATA ATTRIBUTES*******************");

//obteniendo el atributo personalizado con notación getAttribute
console.log($linkDOM.getAttribute("data-description"));

//obteniendo el atributo con notación del .
console.log($linkDOM.dataset); // dataset =  la coleccion en la que se almacenan los data attributes dentro de HTML

//para modificar el data attribute podeos usar las mismas técnicas
$linkDOM.setAttribute(
    "data-description",
    "prueba de modificación de data-attirbute"
);
//modificación de la notación con el .
$linkDOM.dataset.id = "prueba de modificación de data attribute con el .";