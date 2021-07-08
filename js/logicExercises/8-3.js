//programa una función que dado un arreglo de números obtenga el promedio

const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn("No se colocó ningún arreglo");
    if (!(arr instanceof Array))
        return console.error("El valor colocado no es un arreglo");
    if (arr.length === 0) return console.error("No se admiten arreglos vacíos");
    for (let num of arr) {
        if (typeof num !== "number")
            return console.error(`El valor ingresado "${num}" NO es un número`);
    }
    return console.info(
        arr.reduce((total, num, index, arr) => {
            total += num;
            if (index === arr.length - 1) {
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
            } else {
                return total;
            }
        })
    );
};

promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);