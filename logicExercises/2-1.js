// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

let texto = prompt("Ingrese el texto a mostrar al revés");

const textoInvertido = (texto = "") => {
    if (!texto) return console.warn("No se ingresó ningun valor");
    if (texto.length < 2)
        return console.error(
            "Por favor ingrese más de un valor para que el cambio se pueda observar"
        );

    return console.info(texto.split("").reverse().join(""));
};
textoInvertido(texto);