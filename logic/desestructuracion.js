//esta función se añadió en el 2015, es una nueva forma de  agregar valores a arrays y objetos

const numeros = [1, 2, 3];

//sin destructuracion

let uno = numeros[0];
dos = numeros[1];
tres = numeros[2];
console.log(uno, dos, tres);

//con destructuring
const numeros = [1, 2, 3];
const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
    nombre: "Armando",
    apellido: "garcia",
    edad: 26,
};

//para que la desstructuración funcione en los objetos, es importante que la variable a generar se llame igual que la propiedad del objeto que se trata de aislar
//el orden de las variables no es importante
let { nombre, apellido, edad } = persona;
console.log(
    `Nombre es ${nombre}`,
    `Apellido es ${apellido}`,
    `Edad es ${edad}`
);