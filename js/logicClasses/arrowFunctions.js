//implementación que viene a mejorar la forma en como se escriben funciones, da más expresividad y síntesis a la escritura de códigfo
//nueva forma de definir funciones anónimas que sean expresadas

//función expresada = cuando a una variable le asignas el valor de una función anónima

const saludo = function() {
    console.log("Hola");
};

//función declarada que sufre de hoisting y puede ejecutarse incluso antes de haberse declarado (comportamiento negativo)
saludar();

function saludar() {
    console.log("Hola");
}
saludar();

//arrow function
//cuando tu función tiene una sola línea de instrucción, se pueden omitir las llaves

const saludo2 = () => console.log("Hola");
saludo2();

//recibiendo parámetros

const saludarParam = (nombre, apellido) =>
    console.log(`Hola ${nombre} ${apellido}`);
saludarParam("Armando", "García");

//recibienbdo sólo un parámetro no se necesitan paréntesis envolviendo al parámetro
const saludar1Param = (nombre) => console.log(`Hola ${nombre}`);
saludar1Param("Armando");

//con arrow functions también incluyen un return implícito

//sin arrow

const sumar = function(a, b) {
    return a + b;
};
console.log(sumar(10, 10));

//con arrow functions
const sumar = (a, b) => a + b;
console.log(sumar(10, 11));

//en iteraciones sobre arrays y objetos
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((el, index) =>
    console.log(`${el} está en la posición ${index}`)
);

//las arrow capturan el objeto this del conexto en el que se encuentren, por lo que dentro de una función no se deben generar métodos usando arrow functions

function perro(params) {
    console.log(this); //this es window
}
perro();

const perro = {
    nombre: "Dexter",
    ladrar() {
        console.log(this);
    },
};
perro.ladrar();