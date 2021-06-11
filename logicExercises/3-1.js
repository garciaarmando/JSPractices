// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroAleatorio = (min = 501, max = 600) => {
    // (min = 501), (max = 600);
    return Math.round(Math.random() * (max - min) + min);
};

console.log(numeroAleatorio());