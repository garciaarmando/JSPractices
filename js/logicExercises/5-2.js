//programa una función que te devuelva el monto final a aplicar a una cantidad después de aplicarle un descuento

const descuentoPorcentaje = (costo = undefined, descuento = undefined) => {
    if (costo === undefined)
        return console.warn("No se proporcionó un costo válido");
    if (costo === 0)
        return console.warn("No se pueden aplicar descuentos a un costo de $0");
    if (typeof costo !== "number")
        return console.error(
            "No se pueden aplicar descuentos sobre cadenas de texto"
        );
    if (Math.sign(costo) === -1)
        return console.error("No se pueden aplicar descuentos a números negativos");
    if (descuento === undefined)
        return console.warn("No se proporcionó un valor de descuento válido");
    if (descuento === 0) return console.warn("No se pueden descontar un 0%");
    if (typeof descuento !== "number")
        return console.error("El % de descuento no puede ser una cadena de texto");
    if (Math.sign(descuento) === -1)
        return console.error(
            "No se puede realizar un descuento de un valor negativo"
        );
    let preciototal = Math.round(costo - (descuento * costo) / 100);
    return console.info(
        `$${costo} menos ${descuento}% de descuento da un precio de $${preciototal}`
    );
};

//ingrese costo - descuento
descuentoPorcentaje(10, 10);