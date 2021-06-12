const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No se colocó un número");
    if (typeof numero !== "number")
        return console.error("El valor ingresado no es un número");
    if (numero === 0) console.error("El número no puede ser 0");
    if (Math.sign(numero) === -1)
        return console.error("El número no puede ser negativo");
    let factorial = 1;
    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }
    return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial(8);