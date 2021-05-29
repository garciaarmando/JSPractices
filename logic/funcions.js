//Función declarada

function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

estoEsUnaFuncion(); //invocación de función

//función que retorna valor

function funcionQueDevuelveValor() {
    return "La función ha retornado una cadena de texto"; //palabra clave para retornar, return detiene toda ejecución subsecuente
}
let resultado = funcionQueDevuelveValor();
console.log(resultado);

//función que espera valores y colocando valores por defecto

function saludar(nombre = "Desconocido", edad = 0) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Armando", 26);
saludar();

//Funciones declaradas VS funciones expresadas

//declarada
funcionDeclarada(); //da resultado

function funcionDeclarada() {
    console.log(
        "Esto es una funcioón declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada"
    );
}

funcionDeclarada(); //da resultado

//expresada -> anónima
//consola: no puedes acceder a la función antes de su declaración
const funcionExpresada = function() {
    console.log(
        "Esto es una función expresada, es decir, que se le ha asignado como valor a una constante, si invocamos esta función antes de su definición JS nos dirá 'Cannot acces 'funcionExpresada' before initialization'"
    );
};

funcionExpresada();