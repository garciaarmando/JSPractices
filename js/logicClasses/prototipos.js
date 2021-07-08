//la programación orientada (POO) a objetos en JS es azúcar sintáctiva, es decir, una manera más fácil para hacer la programación oientada a prototipos

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

//función constructora con métodos dentrro ---MALA PRÁCTICA DEBIDO A SU POCA ESCALABILIDAD

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

//Función constructora en donde sólo dejamos dentro propiedades pero  asignamos los métodos al prototipo

function Animal(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
}

//métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function() {
    console.log(`Hago sonidos porque estoy vivo`);
};
Animal.prototype.saludar = function() {
    console.log(`Soy un animal y mi nombre es ${this.nombre}`);
};

//creando instancias usando el constructor
const snoopy = new Animal("Snoopy", "macho"),
    lolaBunny = new Animal("Lola Bunny", "hembra");
console.log(snoopy, lolaBunny);
snoopy.sonar();
snoopy.saludar();
lolaBunny.sonar();
lolaBunny.saludar();