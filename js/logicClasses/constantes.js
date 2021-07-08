export const PI = Math.PI;
//lo que no tenga la palabra export, no se exportará
let usuario = "Armando";
let password = "12345";

/*
para realizar exportaciones por default de const y let primero se declara la variable y después se exporta

let usuario = 'Armando'
export default usuario

*/
export default function saludar() {
    console.log("Hola módulos +ES6");
}