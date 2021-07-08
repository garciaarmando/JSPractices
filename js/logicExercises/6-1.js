//Programa una función que dada una cadean de texto cuente el número de vocales y consonantes

// var numeroVocales = cadena.match(/[aeiou]/gi).length
const vocalesConsonantes = (cadena = "") => {
    if (!cadena) return console.warn("Se debe introducir al menos un caracter");
    if (typeof cadena !== "string")
        return console.info(
            `No se puede realizar la operación con el valor ${cadena}`
        );
    if (/[0123456789]/.test(cadena))
        return console.info(
            `Sólo se deben introducir caracteres, los números no son validos`
        );
    let vocales = 0;
    consonantes = 0;
    cadena = cadena.toLocaleLowerCase();
    for (let letra of cadena) {
        if (/[aeiouáéíóúü]/.test(letra)) {
            vocales++;
        }
        if (/[bcdfghjklmnpqrstvxyzñÑ]/.test(letra)) {
            consonantes++;
        }
    }
    return console.info({
        cadena,
        vocales,
        consonantes,
    });
};

vocalesConsonantes("ñoño");