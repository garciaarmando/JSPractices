/*setTimeOut
recibe una función callback y tiempo expresado en milisegundos
el contenido se ejecuta una sola vez pasado ese periodo de tiempo

*/

let temporizador = setTimeout(() => {
    console.log("Ejecutando un setTimeout una sola vez");
}, 1000);

//clearTimeout() es la función que cancela el setTimeout, pero este debe ser almacenado en una variable para que funcione

clearTimeout(temporizador);
console.log("Después del clear");
/*setInterval
Ejecuta su contenido cada cierto periodo de tiempo expresado en milisegundos
*/

let reloj = setInterval(() => {
    console.log(new Date().toLocaleTimeString()); //la hora cada 5 seg
}, 5000);

clearInterval(reloj);