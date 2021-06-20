function* iterable() {
    yield "Hola";
    console.log("Hola consola");
    yield "Hola 2";
    console.log("Seguimos con más instrucciones de nuestro código");
    yield "Hola 3";
    yield "Hola 4";
}

let iterador = iterable();
for (let y of iterador) {
    console.log(y);
}

//guardando las iteraciones en un arreglo
const arr = [...iterable()];
console.log(arr);

function cuadrado(valor) {
    setTimeout(() => {
        return console.log({ valor, result: valor * valor });
    }, Math.random() * 1000);
}

function* generador() {
    console.log("Inicia generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Terminad generator");
}
let gen = generador();

for (let y of gen) {
    console.log(y);
}