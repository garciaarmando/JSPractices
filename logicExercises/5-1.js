//programa una función para convertir números de base binaria a decimal y vivecersa. pe. miFuncion(100,2) devolverá 4 base 10

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No se colocó ningún número");
    if (typeof numero !== "number")
        return console.error(`El valor ${numero} ingresado no es un número`);
    if (base === undefined) return console.warn("Necesitas meter una base");
    if (typeof base !== "number")
        return console.error(`El valor ${base} ingresado no es un número`);
    if (base === 2) {
        return console.info(
            `${numero} base ${base} = ${parseInt(numero, base)} base 10`
        );
    } else if (base === 10) {
        return console.info(
            `${numero} base ${base} = ${numero.toString(base)} base 2`
        );
    } else {
        return console.error("El tipo de base a convertir no es válido");
    }
};

convertirBinarioDecimal(1110010, 2);
convertirBinarioDecimal(114, 10);