//programa una función que dado un array devuelva el número más alto y el más bajo de dicho array

const arrayMinMax = (arr = undefined) => {
    if (arr === undefined) return console.warn("No se colocó ningún arreglo");
    if (!(arr instanceof Array))
        return console.error("El valor colocado no es un arreglo");
    if (arr.length === 0) return console.error("No se admiten arreglos vacíos");
    for (let num of arr) {
        if (typeof num !== "number")
            return console.error(`El valor ingresado "${num}" NO es un número`);
    }
    return console.info(
        `Arerglo original: ${arr}\nValor mayor:${Math.max(
      ...arr
    )}\nValor menor:${Math.min(...arr)}`
    );
};

arrayMinMax([-1, 1, 2, 4, 5, 3, 7, 9]);