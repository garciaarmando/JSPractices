//las clases no reciben parámetros
//los parámetros se colocan dentro del método constructor, mimso que es un método especial que se ejecuta en el momento de instanciar la clase
//Al usar clases, sí podemos dejar los métodos de la clase dentro de ella misma, ya que JS hará las mejoras realizadas en lecciones pasadas para no teber que asociar métodos a objetos que quizás no los requieran

class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar() {
        console.log(`Soy un animal y mi nombre es ${this.nombre}`);
    }
}

const mimi = new Animal("Mimi", "Hembra");
scooby = new Animal("Scooby", "Macho");
scooby.sonar();
console.log(mimi, scooby);

//herencia
//el método super() manda a llamar el construtor de la clase padre
class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    //se sobreescribre el método de la clase Animal
    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
}

const Dexter = new Perro("Dexter", "macho", "mediano");
Dexter.sonar();