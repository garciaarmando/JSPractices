function Animal(nombre, genero) {
    //Dejamos sólo atributos
    this.nombre = nombre;
    this.genero = genero;
}

//los métodos los anclamos a la función prototipal para añadirlos sólo a los objetos que en realidad lo necesiten

Animal.prototype.sonar = function() {
    console.log(`Hago sonidos porque estoy vivo`);
};
Animal.prototype.saludar = function() {
    console.log(`Soy un animal y mi nombre es ${this.nombre}`);
};

//Herencia prototipica, se heredarán las características de Animal
function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}
//perro está heredando de Animal, tnato sus propiedades como sus métodos
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//La clase hija (Perro) puede sobreescribir los métodos de la clase padre o generar nuevos en caso de ser necesario

Perro.prototype.sonar = function() {
    console.log("Soy un perro y mi sonido es un ladrido");
};
Perro.prototype.ladrar = function() {
    console.log("Guauu Guauuu");
};

const snoopy = new Perro("Snoopy", "macho", "Mediano");
console.log(snoopy);
lolaBunny = new Animal("Lola Bunny", "Hembra");
console.log(lolaBunny);