//Cadena de texto a.k.a strings

let nombre = "Armando";
let apellido = "García";
let saludo = new String("Hola mundo");
let lorem =
    "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum dolorum quasi cum molestias fugit ipsa nihil animi mollitia dolores, aperiam incidunt error labore rem perspiciatis id soluta temporibus nemo!       ";

console.log(nombre, apellido, saludo); //imprime el valor
console.log(nombre.length, apellido.length, saludo.length); //imprime la longitud de caracteres

//métodos

console.log(nombre.toUpperCase()); //pasa el texto a mayúsculas
console.log(apellido.toLowerCase()); //pasa el texto a minúsculas
console.log(lorem.includes("amet")); //buscar si una variable incluye X cadena -> true
console.log(lorem.includes("armando")); //buscar si una variable incluye X cadena -> false
console.log(lorem.trim()); //quita espacios en blanco al inicio y al final de cadenas de texto
console.log(lorem.split(",")); //convierte una cadena de texto a un arreglo