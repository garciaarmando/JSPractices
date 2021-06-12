// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");
    if (typeof numero !== "number")
        return console.error(`El valor ${numero} ingresado NO es un número`);
    return numero % 2 === 0 ?
        console.info(`El número ${numero} es par`) :
        console.info(`El número ${numero} es impar`);
};

parImpar(-398);