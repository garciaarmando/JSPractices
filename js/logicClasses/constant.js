const PI = 3.1416;
console.log(PI);
PI = 3.16; // Dará error debido a que se intenta cambiar el valor de un valor primitivo

//Valores compuestos sí pueden modificarse debido a que en ellos se accede a la referencia y no al valor como tal

const objeto = {
    nombre: "Armando",
    edad: 26,
};

const colores = ["blanco", "negro", "azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "armandobfmv@gmail.com";
colores.push("anaranjado");

console.log(objeto);
console.log(colores);