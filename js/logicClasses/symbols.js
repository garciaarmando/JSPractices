let hola = "Hola";
hola2 = "Hola";
console.log(hola === hola2); //true

//no se usa el operador new sino su función constructora

let id = Symbol("id");
id2 = Symbol("id");

console.log(id === id2); //false
console.log(id, id2); //Symbol(id) Symbol(id2)
console.log(typeof id, typeof id2); //symbol symbol

//Implementación y uso práctico

//definiendo symbol como una propiedad de tipo variable y como una propiedad que contendra un método
const NOMBRE = Symbol("nombre"); //Se define el símbolo asociado a una constante
const SALUDAR = Symbol("saludar");
const persona = {
    [NOMBRE]: "Armando", //se añade entre [] y junto su valor como cualquier otra propiedad
};
console.log(persona); //Symbol(): "Armando"

persona.NOMBRE = "Armando García"; //El símbolo se mantiene intacto y se añade una propiedad NOMBRE NOMBRE: "Armando García" Symbol(): "Armando"
console.log(persona);

console.log(persona.NOMBRE); //Armando García
console.log(persona[NOMBRE]); //Armando
persona[SALUDAR] = function() {
    console.log("Hola");
};
persona[SALUDAR](); //Invocación de symbol con método dentro

//los símbolos se mantendrán privados, no se mostrarán aún usando un for in

for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//para listar los símbolos
console.log(Object.getOwnPropertySymbols(persona));