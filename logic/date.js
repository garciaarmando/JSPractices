//instanciamos el objeto Date() en una variable
let fecha = new Date();
console.log(fecha);
//Obtener día del mes
console.log(fecha.getDate());
//día de la semana D L M MI J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());
//obtener el mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
//para obtener el año
console.log(fecha.getFullYear());
//para obtener la hora, minutos,segundos y milisegundos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
//para obtener fecha a formato legible
console.log(fecha.toString());
//extrayendo sólo la parte de la fecha
console.log(fecha.toDateString());
//obtener sólo la hora local sin el huso horario
console.log(fecha.toLocaleString());
//obtener solo la parte de la fecha sin el huso horario
console.log(fecha.toLocaleDateString());
//para sólo obtener la parte de la hora sin el huso horario
console.log(fecha.toLocaleTimeString());
//minutos de diferencia de la hora del meridiano
console.log(fecha.getTimezoneOffset());
//obtener el día del meridiano (Londres)
console.log(fecha.getUTCDate());
//obtener el día del meridiano
console.log(fecha.getUTCHours());
//cuántos segundos han pasado desde 1970
console.log(Date.now());
let cumpleArmando = new Date(1995, 0, 04);
console.log(cumpleArmando);