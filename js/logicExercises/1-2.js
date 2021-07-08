// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

let texto = prompt("Coloque su cadena de texto");
let corte = prompt(
    "Escriba los caracteres a recortar de su cadena de texto anterior"
);

let recortador = (texto, corte) => {
    let toNumber = Number(corte);
    let cadenaCortada = texto.substring(0, toNumber);
    console.log(cadenaCortada);
};

recortador(texto, corte);