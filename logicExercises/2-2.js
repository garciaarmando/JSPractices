//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoEnCadena = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste la cadena");
    if (!texto) return console.warn("No ingresaste el texto");
    let i = 0,
        contador = 0;

    while (i !== -1) {
        i = cadena.indexOf(texto, i);
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(
        `La palabra texto se repite ${contador} veces y lo que trae i es ${i}`
    );
};

textoEnCadena(
    "Hola mundo, adios mundo, yolo mundo, holi mundo chao mundo",
    "mundo"
);