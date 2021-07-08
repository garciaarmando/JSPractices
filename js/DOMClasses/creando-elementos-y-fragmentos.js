//create element es el método para general un elemento del DOM de uno por uno
const $figure = document.createElement("figure"),
    $figure2 = document.createElement("figure");
($image = document.createElement("img")),
($figcaption = document.createElement("figcaption")),
//crea un nodo de texto
($figcaptionText = document.createTextNode("Animals")),
//seteando el elemento padre en do se se va a insertar la tarjeta
($cards = document.querySelector(".cards"));

//configurando los elementos de figure
$image.setAttribute("src", "https:placeimg.com/200/200/animals");
$image.setAttribute("alt", "animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($image);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//crear más de un elemento a la vez
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");

document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

//usando INNER HTML
const continentes = ["Africa", "America", "Asia", "Europa", "Oceanía"];
$ul2 = document.createElement("ul");
document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
// $ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

/*Los fragmentos de código dinámico que recibiran la sinserciones y almacenándolas en memoria, es justo ese fragmento el que posterioremente se añadirá con una sola inserción*/
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

document.body.appendChild($ul3);
meses.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);