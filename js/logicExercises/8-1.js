//programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el 1ro tendrá los números ordenados de forma ascendente y el 2do de forma descendente

const ordenarArreglo = (arr = undefined) => {
    if (!(arr instanceof Array))
        return console.error("El valor colocado no es un arreglo");
    if (arr.length === 0) return console.error("No se admiten arreglos vacíos");
    for (let num of arr) {
        if (typeof num !== "number")
            return console.error(`El valor ingresado "${num}" NO es un número`);
    }
    return console.info({
        arr,
        asc: arr.map((el) => el).sort(),
        desc: arr.map((el) => el).reverse(),
    });
};

ordenarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);