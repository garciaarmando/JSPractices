//7) Programa una función que valide si una palabra o frase dada, es un palíndromo(que se lee igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true.function texto()

function texto() {
    let palabra = prompt("Escribe una palabra").toLowerCase();

    // eliminamos los espacios en blanco
    palabra = palabra.replace(/ /g, "");

    for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] != palabra[palabra.length - i - 1]) {
            return false;
        }
    }
    return true;
}

if (texto()) {
    alert("Esto es palíndromo");
} else {
    alert("Esto no es palíndromo");
}