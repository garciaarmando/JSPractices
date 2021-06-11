// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let textoUsuario = prompt("Por favor coloque su texto");

const textoToArray = (textoUsuario) => {
    let nuevoArray = textoUsuario.split("");
    console.log(nuevoArray);
};

textoToArray(textoUsuario);