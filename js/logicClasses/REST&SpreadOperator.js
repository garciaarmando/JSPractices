//REST: Forma de virtualmente ir agregando parámetros infinitos a una función
//REST permite añádir posteriormente valores a una función en caso de ser necesarios

//...c es el indicador de que pueden o no añadirse más valores posteriormente
function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function(n) {
        //se ejecuta un ciclo for each para que cada valor que se añada posteriormente sea incluido en el valor de la variable resultado
        resultado += n;
    });
    return resultado;
}

console.log(sumar(1, 2, 4, 6, 7));

//spread operator es útil para aquellos momentos en el que una expresión requiera ser expandida en situaciones donde se almacenen múltiples argumentos o elementos

//por ejemplo cuando se tiene un array con cierto número de elementos y en determinado momentos se reciben nuevos valores, con el spread operator nos evitamos el uso de concatenaciones o el uso del método push

const arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 0];

// console.log(
//     `arr1 tiene ${arr1.length} elementos y mi arr2 tiene ${arr2.length} elementos`
// );

const arr3 = [...arr1, ...arr2];
console.log(arr3, arr3.length);