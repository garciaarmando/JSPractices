this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}
saludar("Hola", "María");

const obj = {
    lugar: "Contexto Objeto",
};

//call recibe como parámetro un objeto, mismo que será el contexto en el que se basará para la invocación de la función, rexibe los parámetros (en caso de haberlos) separados por comas
saludar.call(obj, "Hola", "Armando"); //Hola Armando desde el Contexto Objeto

//apply también recibe como parámetro un objeto y tomara el contexto de este, la diferencia radica en que en lugar de recibir parámetros separados por comas, los recibe en forma de arreglo

saludar.apply(obj, ["Hello", "Dexter"]); //Hello Dexter desde el Contexto Objeto

/* bind trabaja de forma similar a una arrow function en el sentido de tomar el scope del padre del objeto de donde ha sido creada, se ejecuta dentro de nuestros objetos */

const persona = {
    nombre: "Armando",
    saludar: function() {
        console.log(`Hola ${this.nombre}`);
    },
};

persona.saludar(); //Hola Armando

const otraPersona = {
    //bind igualmente recibe como parámetro un objeto de donde tomará el contexto
    saludar: persona.saludar.bind(persona),
};

otraPersona.saludar(); //ANTES DEL BIND: undefined debido a que el objeto otraPersona no tiene una propiedad nombre valida
otraPersona.saludar(); //DESPUES DEL BIND: Hola Armando