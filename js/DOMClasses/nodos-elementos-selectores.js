//recibe como elemento cualquier id del documento, no es necesario anteponer el # antes del nombre de nuesteo id
console.log(document.getElementById("menu"));

/*
- recibe como parámetro un selector valido de CSS (id, class, etiqueta a etc) a excepción de pseudoclases y pseudoelementos, 
- EN el caso de id's y clases, es necesario anteponer . o # en función de si lo que seleccionaremos se trata de una clase o u id, */

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a")); //buscando una etiqueta ancla en el documeto
//en caso de traerme todos los elementos tenemos querySelectorAll
console.log(document.querySelectorAll("a").length);
//junto a los arreglos, comparten la propiedad .lenght
console.log(document.querySelectorAll("a")); //6
//comparten algunos elementos con los arraglos
//for each
document.querySelectorAll("a").forEach((el) => {
    console.log(el);
});

//seleccionado clases
console.log(document.querySelectorAll(".card"));
//en caso de querer acceder a un elemento en específico de los que traiga querySelectorAll, podemos usar la notación de los corchetes como en los arreglos
console.log(document.querySelectorAll("a")[4]); //se accede a <a href="">Sección 5</a>
//incluso se puede acceder a elementos descendientes
console.log(document.querySelectorAll("#menu li")); //se accede a todos los li dentro de la clase menú