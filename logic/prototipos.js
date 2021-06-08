//JS es un lenguaje multiparadigma, se pueden utilizar diferentes paradigmas de progrmaación como la funcional, el orientado a objetos

//la programación orientada (POO) a objetos en JS es azúcar sintáctiva, es decir, una manera más fácil para hacer la programación oientada a prototipos

/*POO: 
clases - modelo a seguir, lo que para platón es una idea
objetos - es una instancia de una clase/idea
  atributos - es una caractersitica o propiedad del objeto (son variables dentro de un objeto)
  métodos - Son las acciones que un objeto puede realizar (son funciones dentro de un objeto)

  Lo que hace el transpilador es transformar la clase a una función prototipal

  Prototipo -  Mecanismo por el cual un objeto puede heredar atributos y métodos
  El prototipo más primitivo que tiene JS es un objeto
*/

const animal = {
    nombre: "Dexter",
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    },
};

const animal2 = {
    nombre: "Manchas",
    sonar() {
        console.log("Juego en el mundo de los perros");
    },
};

console.log(animal);

//prototipo =  función constructora que generará nuevas instancias
//cuando se esta trabajando con funciones constructoras en JS, tanto los atributos como métodos deben tener this para referenciar el contexto dentro de la función constructora

function Animal(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    //métodos
    this.sonar = function() {
        console.log(
            `Hago sonidos porque estoy vivo y soy un animal llamado ${this.nombre}`
        );
    };
}

//creando instancias usando el constructor
const snoopy = new Animal("Snoopy", "macho"),
    lolaBunny = new Animal("Lola Bunny", "hembra");
console.log(snoopy, lolaBunny);
snoopy.sonar();