let set = new Set([1, 2, 3, 4, 5, 5, true, false, {}, {}, "HOLA", "hola"]);
console.log(set); //devolvera set retirando todo dato duplicado
console.log(set.size); //es el equiovalente a string.length

const set2 = new Set();
set2.add(2); //ad es el método para añadir elementos al Set
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(5);
set2.add(6);
console.log(set2);
console.log(set2.size);

//recorriendo un set con for of
console.log("Comienza for of");
for (valor of set2) {
    console.log(valor);
}

//recorriendo un  set con for each
console.log("Comienza for each");
set2.forEach((element) => {
    console.log(element);
});

//accediendo a las posiciones de los arreglos
console.log(set2[0]); //esto dará error porque aunque set parezca un arreglo, no lo es
//se debe convertir el set a un arreglo con el método .from de los arreglos
let arr = Array.from(set2);
console.log("Después del from");
console.log(arr[0]);

//el método para eliminar valores de un set es .delete()
set.delete("HOLA");
console.log(set); //se elimina 'HOLA'

//pra comprobar si determinado valor existe dentro de la colección de datos es que se usa el método has

console.log(set.has("hola")); //devolverá true

//en dado caso de que se quiera limpiar el set, existe el método clear()
set2.clear();
console.log(set2); //eliminará todos los elementos del set2