//arreglos, funciones y objetos puede ir declarados con const

const a = [];

//arreglo es una colección de elementos de cualquier tipo
//el 1er elemento se coloca en la posición 0
const b = [1, true, "Hola", ["A", "B", "C"]];
console.log(b);
//accediendo a la referencia del valor
console.log(b[2]); //Se accede a el valor "Hola"
console.log(b[3][1]); //Se pueden colocar tantas coordendas como se necesite, en este ejemplo se accede al segundo caracter del arereglo embebido dentro de b

//otras formas de crear arreglos a partir de ECMA 6
const c = Array.of("X", "Y", "Z", 9, 8.7);
console.log(c);

//Métodos

//.fill es el método para generar un arreglo y asignarle a todas sus posiciones el mismo valor
const d = Array(100).fill(false);
console.log(d); //arreglo de 100 posiciones con valor false

//.push añade elementos al arrya original

const colores = ["rojo", "verde", "azul"];
console.log(colores);
colores.push("Negro");

//.pop retira el último elemento del array, en este caso Negro
const colores = ["rojo", "verde", "azul", "Negro"];
// console.log(colores);
// colores.pop();
// console.log(colores);

//.forEach realiza una acción por cada uno de los elementos del array

colores.forEach(function(color, index) {
    console.log(`<li id="${index}">${color}</li>`);
});