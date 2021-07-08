// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let cadenaUsuario = prompt("Ingrese el texto a repetir");
let repeticiones = prompt("Elija las veces que el texto ingresado se repetira");

const cadenaRepeticiones = (cadenaUsuario, repeticiones) => {
    let repeticionesToNumber = Number(repeticiones);
    let resultadoRepeticiones = cadenaUsuario.repeat(repeticionesToNumber);
    console.log(
        `Aquí está su texto ${cadenaUsuario} repetida ${repeticiones} veces: ${resultadoRepeticiones}`
    );
};

cadenaRepeticiones(cadenaUsuario, repeticiones);