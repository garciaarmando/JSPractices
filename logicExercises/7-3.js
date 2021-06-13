//if (arr === undefined) return console.warn("No se colocó ningún arreglo");

const arrParImpar = (arr = undefined) => {
    if (!(arr instanceof Array))
        return console.error("El valor colocado no es un arreglo");
    if (arr.length === 0) return console.error("No se admiten arreglos vacíos");
    for (let num of arr) {
        if (typeof num !== "number")
            return console.error(`El valor ingresado "${num}" NO es un número`);
    }
    return console.info({
        pares: arr.filter((num) => num % 2 === 0),
        impares: arr.filter((num) => num % 2 === 1),
    });
};
//put an array of numbers here
arrParImpar();