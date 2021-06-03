//while - do while : cayendo en desuso por ser imperativas en lugar de declarativas
// en estos ciclos, siempre es importante añadir sumar a nuestra variable para no caer en un bucle

let contador = 10;

//while compara antes de ejecutar las líneas dentro del ciclo
while (contador < 10) {
    console.log(contador);
    contador++;
}

//do while ejecuta las líneas dentro del ciclo al menos y después compara para seguir ejecutando o no en función de si la condición se cumple
let contador = 10;
do {
    console.log(contador);
    contador++;
} while (contador <= 10);