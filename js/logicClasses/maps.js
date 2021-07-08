const mapa = new Map();

//para agregar valores hay dos formas

//1
mapa.set("nombre", "Armando");
mapa.set("apellido", "Garcia");
mapa.set("edad", 26);

console.log(mapa);
/*
Map(3) {"nombre" => "Armando", "apellido" => "Garcia", "edad" => 26}
[[Entries]]
0: {"nombre" => "Armando"}
1: {"apellido" => "Garcia"}
2: {"edad" => 26}
size: (...)
__proto__: Map
*/

//2
const mapa2 = new Map([
    ["nombre", "Dexter"],
    ["edad", 7],
    ["animal", "perro"],
]);
console.log(mapa2);
//igual que en los sets, .size es el método para obtener la longitud
console.log(mapa.size);

//para evaluar si un map tiene determinada propieda sigue siendo has

console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));

//el método get sirve para imprimir sólo una determinada llave
console.log(mapa.get("apellido"));

//se pueden sobreescribir sus valores de la siguiente forma
mapa.set("nombre", "Jorge Armando");
console.log(mapa.get("nombre"));

//para eliminar elementos
mapa.delete("apellido");
//los maps son objetos que nos permiten tener colleciones de llave valor muy parecidos a los objetos, sin embargo y adiferencia de estos, la llave no está limitada a ser una cadena de texto, pueden ser incluso null, undefined, NaN, booleans etc aunque no es muy recomendable usarlas
mapa.set(19, "19");
mapa.set(undefined, undefined);
mapa.set(false, true);
console.log(mapa);

//PARA RECORRER EL MAP se pueden usar métodos como el for of

for (let [key, value] of mapa) {
    console.log(`Llave: ${key}, valor: ${value}`);
}

//podemos optar por almacenar las llaves del map en una variable y sus valores en otra

const llavesMapa2 = [...mapa2.keys()];
const valuesMapa2 = [...mapa2.values()];
console.log(llavesMapa2);
console.log(valuesMapa2);