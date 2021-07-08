//while - do while : cayendo en desuso por ser imperativas en lugar de declarativas
// en estos ciclos, siempre es importante añadir sumar a nuestra variable para no caer en un bucle

let contador = 10;

//while compara antes de ejecutar las líneas dentro del ciclo
while (contador < 10) {
    console.log(contador);
    contador++;
}

//do while ejecuta las líneas dentro del ciclo al menos una vez y después compara para seguir ejecutando o no en función de si la condición se cumple
let contador = 10;
do {
    console.log(contador);
    contador++;
} while (contador <= 10);

//for mejora lo que hacen while y do while ya que coloca en una sola línea de código la incialización de la variable, la condición y el incremento-> for (inicialización de variable; condición; decremento o incremento) {sentencias que ejecuta el for }

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//for in -> loop que permite recorrer las propiedades de un objeto
//para acceder al valor de las propiedades, debemos usar los corchetes

const armando = {
    nombre: "Armando",
    apellido: "Garcia",
    edad: 26,
};

for (const propiedad in armando) {
    console.log(`Key: ${propiedad}, Value:${armando[propiedad]}`);
}

//for of permite recorrer todos los elementos de cualquier objeto que sea iterable en JS
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (const elemento of numeros) {
    console.log(elemento); //los items del array
}
let saludar = "Hola mundo"; //una cadena de texto también es un elemento iterable
for (const caracter of saludar) {
    console.log(caracter); //la cadena de texto
}