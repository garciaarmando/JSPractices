//Mecanismo que permite controlar el fluo del código

//if-else :  si cierta condición se cumple, se ejecutan ciertas acciones

let edad = 17;

if (edad >= 18) {
    console.log(`Eres mayor de edad porque tienes ${edad} años`);
} else {
    console.log(`Eres menor de edad porque tienes ${edad} años`);
}

//if-else if

/*
Déjame dormir 0 - 5
Buenos días 6 -11
Buenas tardes 12 -18
Buenas noches 19 23
*/
let hora = 1;

if (hora >= 0 && hora <= 5) {
    console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
    console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

//simplificación de if else - operador ternario (condicion) ?  verdadero : falsa - sólo para una línea de código

let edad = 17;
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

//switch - case cuando se tengan diferentes valores para una misma variable

/*
domingo 0
lunes 1
martes 2
miércoles 3
jueves 4
viernes 5
sábado 6
*/
let dia = 6;

switch (dia) {
    case 0:
        console.log("El día es domingo");
        break;
    case 1:
        console.log("El día es lunes");
        break;
    case 2:
        console.log("El día es martes");
        break;
    case 3:
        console.log("El día es miércoles");
        break;
    case 4:
        console.log("El día es jueves");
        break;
    case 5:
        console.log("El día es viernes");
        break;
    case 6:
        console.log("El día es sábado");
        break;

    default:
        console.log("No hay más de 7 días en una semana");
        break;
}