// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");
    if (typeof numero !== "number")
        console.error(`El valor ${numero} ingresado, NO es un número`);
    if (numero === 0) return console.error("El número no puede ser 0");
    if (numero === 1) return console.error("El número no puede ser 1");
    if (Math.sign(numero) === -1)
        return console.error("El número no puede ser negativo");
    let divisible = false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            divisible = true;
            break;
        }
    }
    return divisible ?
        console.log(`El número ${numero} NO es primo`) :
        console.log(`El número ${numero} SÍ es primo`);
};

// numeroPrimo();
numeroPrimo(200);