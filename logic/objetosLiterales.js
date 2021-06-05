//Es una nueva forma de escribir atributos y métodos, en incluso de asignarlos

let nombre = "Dexter";
edad = 3;

//sin caracteristicas de los objetos literales
const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function() {
        console.log("Perro ladrando");
    },
};
console.log(perro.ladrar());

//con objetos literales
//Siempre y cuando la variable que le vas a asignar a un objeto tiene el mismo nombre de la propiedad a la que le vas a asignar esa variable
let nombre = "Dexter";
edad = 3;

const dog = {
    nombre,
    edad,
    raza: "Pitbull",
    ladrar() {
        console.log("Perro ladrando");
    },
};
console.log(dog); //imprime los valores de la variable pero ahora dentro del objetos
dog.ladrar();