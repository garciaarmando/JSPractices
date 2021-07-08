//weakset
const ws = new WeakSet();

let valor1 = { valor1: 1 };
valor2 = { valor2: 2 };
valor3 = { valor3: 3 };

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws);

// se les puede aplicar el método has()
console.log(ws.has(valor3));

//eliminando referencias
ws.delete(valor3);
console.log(ws);

setInterval(() => {
    console.log(ws);
}, 1000);

setTimeout(() => {
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000);

//weakmap

//sólo permite llaves de tipo objeto referenciadas en una variable
//no aceptan .set ni iterarlos con for of o foreach
let llave1 = {};
llave2 = {};
llave3 = {};

const wm = new WeakMap();
wm.set(llave1, 1);
wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);

//aceptan el método has
console.log(wm.has(llave3)); //true
//aceptan el método get para imprimir sólo una referencia en específico
console.log(wm.get(llave1));
//permiten eliminar referencias vía delete
wm.delete(llave3);
console.log(wm);