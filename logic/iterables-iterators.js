const iterable = new Set([1, 2, 3, 3, 3, 3, 4, 5]);

//accedemos al iterador de la variable iterable

let iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);
console.log(iterador.next());

//recorriendo nuestro iterable vía un ciclo while
let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}