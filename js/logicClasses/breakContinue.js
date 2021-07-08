const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//break hará que sólo se imprima hasta el 5
for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i]);
}

//continue hará que la iteración se detenga en el 5, omita el 6 por la evaluación y continúa la ejecución del for

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(numeros[i]);
}