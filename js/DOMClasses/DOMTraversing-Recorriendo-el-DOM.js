const $cards = document.querySelector(".cards");
console.log($cards);

//partiendo de cards, pasamos a hacer referencia a su hijos
console.log($cards.children); //devuelve una HTMLCollection con cada uno de los elementos que la clase cards tiene en su interior

//para acceder a un hijo en particular, recorrimos a la notación de los []
console.log($cards.children[1]);

//para acceder al padre del elemento que estamos tomando com referencia
console.log($cards.parentElement); //retorna body

//se puede acceder al 1er y último elemento hijo
console.log($cards.firstElementChild); //retorna al 1er elemento hijo
console.log($cards.lastElementChild); //retorna al último elemento hijo

//detectando al hermano que está antes y el hermano que está después
console.log($cards.previousElementSibling); //el 1er elemento que esté antes de nuestro elemento de referencia
console.log($cards.nextElementSibling); //el 1er elemento que esté después del elemento que estamos tomando como referencia

//busca el padre más cercano del tipo de selector que le demos, en este caso va a buscar el elemento sectión más cercano al 3 hijo de nuestra seccion que estamos tomando como referencia
console.log($cards.children[3].closest("section"));