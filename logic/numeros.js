let a = 1;
let b = new Number(2);
let c = 7.19;
let d = "5.6";
console.log(a, b, c);
console.log(c.toFixed(1)); //redondea indicando entre () los números a considerar depués del punto
console.log(parseInt(c)); //castea un string y devuelve un número de tipo entero
console.log(parseFloat(c)); //Convierte un argumento de tipo cadena y devuelve un número de punto flotante.
console.log(typeof d);
console.log(parseFloat(c) + parseFloat(d));