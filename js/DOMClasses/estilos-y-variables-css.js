const $linkDOM = document.querySelector(".link-dom");
/*así se haría con getAttribute -> console.log($linkDOM.getAttribute("style")); */
console.log($linkDOM.style); //devuelve un  objeto del tipo CSSStyleDeclaration

//en caso de querer acceder a una propiedad en específico se usa un . y la propiedad en camelCase

console.log($linkDOM.style.backgroundColor); //rgb(247, 223, 30)
console.log($linkDOM.style.color); //rgb(34, 34, 34)

//'computed Properties' -> las propiedasdes que el navegador le coloca por default a nuestros elementos HTML
console.log(getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //rgb(34, 34, 34)

//para establecer valores

//víá setProperty
//elemento HTML + style + setProperty + ('propiedadCSS','valorPropiedad')
$linkDOM.style.setProperty("text-decoration", "none");

$linkDOM.style.setProperty("display", "block");

//con la notación del punto
//elemento HTML + style + propiedadAModificarEnCamelCase + = 'valorPropiedad'
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.margin = "0 auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "0.5rem";
console.log($linkDOM.style);

//variables CSS = Custom Properties

const $html = document.documentElement; //se almacena la etiqueta html a la que pertenecen las variables

$body = document.body; //se almacena el body en la variable

//accediendo a las variables
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

console.log(varYellowColor, varDarkColor);

//aplicandolas a elementos del HTML

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//modificando las variables

$html.style.setProperty("--dark-color", "#000000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);