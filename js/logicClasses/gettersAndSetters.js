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

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
            console.log("Guauuu");
        }
        //un método estático es aquel que se puede ejecutar sin la necesidad de instanciar la clase, es decir, sin la necesida de generar un new MiClase
        //static vuelve a un método en estático
    static queEres() {
        console.log(
            "Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre"
        );
    }

    //setters y getters son métodos especiales que nos van a permitit establecer y obtener los valores de atributos de nuestra clase
    get getRaza() {
        return this.raza;
    }
    set setRaza(raza) {
        this.raza = raza;
    }
}
Perro.queEres();

const dexter = new Perro("Dexter", "Macho", "Mediano");
dexter.setRaza = "Pitbull";
console.log(dexter.getRaza);