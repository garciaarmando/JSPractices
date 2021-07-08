// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contador = (cadena) => {
    return typeof cadena === "string" ?
        cadena.length :
        "El contenido ingresado no es una cadena de texto";
};

console.log(contador("klakslkaslkalska"));