//Para mandar un mensaje de error a la consola
console.error("Enviando un mensaje de error personalizado");
//manda un warning
console.warn("Esto es un aviso");
//Despliega un mensaje que no es ni error ni warning sino información, muy similar a console.log
console.info("Despliega info");

let nombre = "Armando";
apellido = "García";
edad = 26;
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
//usando comodines
console.log(`Hola, mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);

//limpia todo lo que haya estado en la consola
console.clear();

// console.log(window);
// console.log(document);
//para representar un elemento como si fuera un objeto en js
console.dir(document);
console.clear();
//se pueden hacer grupos de elementos con .group seguido de los logs con los elementos pertenecientes a ese grupo
console.group("Estándares con los que se construye la web");
console.log("HTML5");
console.log("CSS3");
console.log("JavaScript");
console.groupEnd(); //indica que finaliza el grupo
console.clear();

//representar en una tabla las propiedades de un objeto
console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5];
const vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Dexter",
    raza: "Pitbull",
    edad: 3,
    tamanio: "Mediano",
    inteligencia: "Limitada",
    apodo: "Deter",
};
console.table(perro);
console.clear();

//para saber cuánto tiempo tarda un bloque de código en ejecutarse

console.time("El tiemp de ejecución es de"); //clave inicio
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}
console.timeEnd("El tiemp de ejecución es de"); //clave final  igual a la de inicio
console.clear();

//para saber cuántas veces se ha ejecutado un fragnmento de código
for (let i = 0; i <= 100; i++) {
    console.count("Ejecución #");
    // console.log(i);
}
console.clear();

//para hacer pruebas

let x = 3;
y = 2;
pruebaXY = "Se espera que X siempre sea menor que Y";

//console.assert(condicion {variableA,variableB, variable con msj validador})
//solamente mostrará mensaje en consola en caso de que la validación no se cumpla
console.assert(x < y, { x, y, pruebaXY });