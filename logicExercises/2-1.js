// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

let texto = prompt("Ingrese el texto a mostrar al revés");

const textoInvertido = (texto = "") => {
    if (!texto)
        return console.warn("No se ingresó ningun valor para notar el cambio");
    if (texto.length < 2)
        return console.error("Por favor ingrese más de un valor");
    if (Math.sign(texto) === -1)
        return console.error("El valor no puede ser negativo");
    return console.info(texto.split("").reverse().join(""));
};
textoInvertido(texto);