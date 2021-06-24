const $card = document.querySelector(".card");
console.log($card);

//accediendo al valor del atributo class
console.log($card.className); //card
console.log($card.classList); //lista de clases en casod de se >1 en un tipo de dato llamado DOMTokenList

//classList cuenta con un método llamado contains que valida si el elemento html cuenta con la clase que le indiquemos, devolviendo un boolean
console.log($card.classList.contains("card")); //true

//añadiendo clases con el método .add
$card.classList.add("rotate-45"); //se añade la clase

//remover clases con el método .remove
$card.classList.remove("rotate-45"); //se elimina la clase

//toggle funciona a manera de interruptor, si el elemento tiene la clase, se la quita, en caso de no tenerla se la añade, útil por ejemplo para colocarla en un logo de modo oscuro y ajustar el tema de la aplicación en función de ello
$card.classList.toggle("rotate-45");

//reemplazando una clase por otra con el método replace que recibe dos parametros (claseAReemplazar - claseASetear)
setTimeout(() => {
    $card.classList.replace("rotate-45", "rotate-135");
}, 2000);

//en caso de necesitar añadir varias clases al mismo tiempo, podemos usar el método add con más de un valor
setTimeout(() => {
    $card.classList.add("opacity-80", "sepia");
}, 4000);

//si se necesita eliminar más de una clase, igualmente remove acepta más de un valor

setTimeout(() => {
    $card.classList.remove("opacity-80", "sepia");
}, 6000);