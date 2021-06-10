//sirve para hacer algunas operacioens matemáticas especiales
//es un objeto estático, no una función
console.log(Math);

//abs devuelve el valor absoluto de un número, es decir la cantidad como tal sin importar si es positivo o negativo
console.log(Math.abs(7.8)); //7.8
//ceil redondea el valor al número entero superior inmediato
console.log(Math.ceil(7.2)); //8
//flor redondea el valor al número inferior inmediato
console.log(Math.floor(7.8)); //7
//round redondea el valor al número más cercano inmediato
console.log(Math.round(7.4)); //7
//sqrt obtiene la raíz cuadrada de un número
console.log(Math.sqrt(81)); //9
//pow eleva el número a una potencia dada
console.log(Math.pow(2, 5)); //2 a la 5ta = 32
//sign es un indicador de si el número es negativo, positivo o cero: negativo = -1, neutro = 0, positivo = 1
console.log(Math.sign(-8)); //-1 por ser negativo
//random va a dar un valor aleatorio comprendido entre 0 y 1
console.log(Math.random());
//en caso de que se desee hacer una rifa con un número aleatorio entre 1 y 1000, se pueden combinar métodos
console.log(Math.round(Math.random() * 1000)); //número aleatorio entre 0 y 1000