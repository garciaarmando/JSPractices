//Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado

const arrayAlCuadrado = (arr = undefined) => {
    if (arr === undefined) return console.warn("No se colocó ningún arreglo");
    if (!(arr instanceof Array))
        return console.error("El valor colocado no es un arreglo");
    if (arr.length === 0) return console.error("No se admiten arreglos vacíos");
    for (let num of arr) {
        if (typeof num !== "number")
            return console.error(`El valor ingresado "${num}" NO es un número`);
    }
    const newArr = arr.map((el) => el * el);
    return console.info(
        `El arreglo original es: ${arr},\nEl arreglo elevado al cuadrado es: ${newArr}`
    );
};
//Put an array here
arrayAlCuadrado();