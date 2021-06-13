//programa una funcin que dado un arreglo de elementos elimine los duplicados

const quitarDuplicados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No se colocó ningún arreglo");
    if (!(arr instanceof Array))
        return console.error("El valor colocado no es un arreglo");
    if (arr.length === 0) return console.error("No se admiten arreglos vacíos");
    if (arr.length === 1)
        return console.error(
            "Coloca más de un valor para que se pueda ejecutar la búsqueda de duplicados"
        );
    return console.info({
        original: arr,
        sinDuplicados: [new Set(arr)],
    });
};
quitarDuplicados([
    "x",
    "x",
    "x",
    1,
    1,
    1,
    1,
    1,
    12,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    true,
    true,
]);