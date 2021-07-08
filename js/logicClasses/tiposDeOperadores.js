//operadores aritméticos : permiten hacer operaciones aritméticas

let a = 5 + 5 - 10 * 3;
let opearadorDivisor = 5 / 2; //devuelve el resultado (cociente)
let operadorModulo = 5 % 2; //operador módulo: devuelve el residuo sin contar la parte fraccionaria

console.log(a);
console.log(opearadorDivisor);
console.log(operadorModulo);

//Operadores relacionales que comparar valores

//> mayor que, < menor que, <= menor o igual, >= mayor o igual, ==, ===, !=, !==

//operadores comparativos
console.log(8 > 9); //8 mayor a nueve -> false
console.log(9 > 8); //9 mayor a 9 -> true

//operdores relacionales

console.log(8 >= 9); //8 mayor o igual a 9 -> false
console.log(9 >= 8); //9 mayor o igual a 8 -> true
console.log(7 <= 7); //7 es menor o igual a 7

//=,==,===

//= es asignación  de variable

let igual = 1;

//== es comparación de valores, no de tipos de datos
console.log(7 == "7"); //true porque ambos son un 7

//=== es comparación de tipo de dato y de valor y esla que siempre se debe de utilizar

console.log(7 === "7"); //false porque uno es un 7 numérico y otro un 7 caracter

//Incremento y decremento usando operadores aritméticos
let i = 1;
i += 3;
console.log(i);
i -= 3;
console.log(i);

//operador unatrio, añáde o resta valores de unidad en unidad
let i2 = 1;
i2++; //suma 1 mismo resultado con ++i2
console.log(i2);
i2--; //resta 1 mismo resultado con --i2
console.log(i2);

//operadores lógicos

//! - Not: Niega, es decir, lo que es verdadero lo vuelve falso y viceversa
console.log(!true); //imprime false

//|| - Or: cuando tengo dos o más condiciones, con que una sea verdadera, el Or validará
console.log(9 === 9 || "9" === 9);

//&& - And: Cuando tengo dos o más condiciones, sólo hasta que todas se cumplan, And validará
console.log(9 === 9 && "9" === "9");