//cortocircuito con OR: Cuando el valor de la izquiera en la expresión siempre pueda validar a true, es el valor que se cargará por defecto

//debemos considerar que se toman encuanta valores que tienden a verdadero

const saludarOr = (nombre) => {
    //el valor de la izquierda valida verdadero en caso de que se pase como parámetro y es el que se aplicará
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
};

saludarOr("Armando");
saludarOr();
console.log(true || "valor de la derecha"); //true es verdadero, ese validará
console.log(false || "Valor de la derecha"); //false tiene a falseo, 'valor de la derecha enrtra en juego'

//cortocircuito con AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto

const saludarAnd = (nombre) => {
    nombre = null && nombre;
    console.log(`Hola ${nombre}`);
};

saludarAnd("Armando");
saludarAnd();
console.log(false && "valor de la derecha"); //false tiene a falso, por lo tanto es el valor que
console.log(true && false); // true es positivo, por lo tanto tomará false

console.log(false && "Cadena verdaera"); //false tiende a false y el que se tomará
console.log(true && "Cadena verdadera"); //true tiene a verdaero y se tomará el valor de la izquierda