// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

let texto = prompt("Ingresa un número para validar si se trata de capicúa");

const numeroCapicua = (texto = "") => {
    if (!texto) return console.warn("No ingresaste una palabra o frase");

    let alreves = texto.split("").reverse().join("");
    return texto === alreves ?
        console.info(
            `El número ${texto} se lee igual que el número ${alreves}, es un Capicúa!`
        ) :
        console.info(
            `El número ${texto} no se lee igual que el número ${alreves}, no es un Capicúa :(`
        );
};

numeroCapicua(texto);