// console.log(this);
// console.log(this === window);

this.nombre = "Contexto Global";

function imprimir() {
    console.log(this.nombre);
}
imprimir(); //Contexto Global

const obj = {
    nombre: "Contexto objeto 1",
    imprimir: function() {
        console.log(this.nombre);
    },
};
obj.imprimir(); //Contexto objeto 1

const obj2 = {
    nombre: "Contexto obj2",
    imprimir,
};
obj2.imprimir(); //Contexto obj2

const obj3 = {
    nombre: "Contexto objeto 3",
    imprimir: () => {
        console.log(this.nombre);
    },
};
obj3.imprimir(); //Contexto Global debido a que las arrow functions no generan su propio scope sino que lo toman del padre del objeto en donde han sido generadas

//función constructora
function Persona(nombre) {
    this.nombre = nombre;
    return console.log(this.nombre);
}

let armando = new Persona("Armando");

//devolviendo un closure dentro de una función

function PersonaClosure(nombre) {
    this.nombre = nombre;
    return function() {
        console.log(this.nombre); //Contexto global ya que dentro del contexto de esta función no existe una variable nombre declarada, por lo que se va a buscarla en el contexto superior y ese es Window
    };
}

//Para solucionar el inconveniente anterior, podemos hacer uso de una arrow function, misma que al no generar su propio scope y tomar el del padre del objeto en donde fue llamada, en este caso lo tomará de PersonaClosure2

const armandoClosure = new PersonaClosure("Armando");
armandoClosure();

function PersonaClosure2(nombre) {
    this.nombre = nombre;
    return () => {
        console.log(this.nombre); //Armando
    };
}

const armandoClosure2 = new PersonaClosure2("Armando");
armandoClosure2(); //Armando