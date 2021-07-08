//En JS todo es un objeto
//Es adecuado usar const cuando se trabaja con objetos
//Un objeto es una colecciónd de valores en configuración llave/valor, puede almecenar todo tipo de valores, incluyendo en esto a funciones, arrays y más objetos
const armando = {
    nombre: "Armando",
    apellido: "García",
    edad: 35,
    pasatiempos: ["videojuegos", "programar", "tomar cerveza"],
    soltero: false,
    contacto: {
        email: "armandobfmv@gmail.com",
        twitter: "@armandopsi",
        github: "@garciaarmando",
    },
    decirMiNombre: function() {
        //usando los valores del objeto
        console.log(
            `Hola! me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años y me puedes seguir en twitter como ${this.contacto.twitter}`
        );
    },
};

//accediendo a los valores del objeto
// console.log(armando);  //punto
console.log(armando["nombre"]); //corchetes, no muy usada
console.log(armando.nombre); //accediendo a propiedades
console.log(armando.pasatiempos[2]); // accediendo a valores del array
console.log(armando.contacto.email); // accediendo a valores del objeto contacto
armando.decirMiNombre(); //ejecutando la función del objeto, misma que usa los propios valores nombre-apellido-edad-contacto.twitter del propio objeto

//métodos de objeto

console.log(Object.keys(armando)); //Lista las llaves del objeto (nombre, apellido, etc.)
console.log(Object.values(armando)); //Lista los atributos y métodos del objeto
console.log(armando.hasOwnProperty("nombre")); //Indica si el objeto tiene la llave indicada dentro