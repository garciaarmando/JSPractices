//definiendo una expresión regular con función constructora

let cadena =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum dolores aspernatur repudiandae tempora officiis beatae adipisci molestiae possimus alias lorem commodi rerum eligendi ullam quaerat molestias, nam nobis, vero tenetur -9 .";

/*flags
 i es ignorar mayúsculas o minúsculas, 
 g es buscar en todo el string y no sólo detenerse en la 1ra coincidencia
 \d representa un dígito del 1 al 9*/
let expReg = new RegExp("[0-9]", "ig");

///definiendo una expresión regular vía // barras

let expReg2 = /[0-9]/gi;

//validando la expresión con .test

console.log(expReg2.test(cadena)); //devuelve true

//validando la expresión con .exec que devuelve un array marcando la posición
console.log(expReg2.exec(cadena));