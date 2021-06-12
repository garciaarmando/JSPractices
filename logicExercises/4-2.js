// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero = 0) => {
    if (!numero) return console.error("No se colocó un número");
    if (typeof numero !== "number")
        return console.error("El valor ingresado no es un número");
    if (numero === 0) console.error("El número no puede ser 0");
    if (Math.sign(numero) === -1)
        return console.error("El número no puede ser negativo");
    numero = numero.toString();
    if (numero.charAt(numero.length - 1) === "0" || "2" || "4" || "6" || "8") {
        console.warn(`El número ${numero} es un número primo`);
    } else {
        console.warn(`El número ${numero} no es un número primo`);
    }
};

parImpar(0);