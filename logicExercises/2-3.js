//7) Programa una función que valide si una palabra o frase dada, es un palíndromo(que se lee igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true.function texto()

let texto = prompt(
    "Ingresa un texto para validar si se trata de un palíndromo"
);
const palindromo = (texto = "") => {
    if (!texto) return console.warn("No ingresaste una palabra o frase");
    texto = texto.toLowerCase();
    let alreves = texto.split("").reverse().join("");
    return texto === alreves ?
        console.info(
            `La palabra ${texto} se lee igual que ${alreves}, es un Palíndromo!`
        ) :
        console.info(
            `La palabra ${texto} no se lee igual que ${alreves}, no es un Palíndromo :(`
        );
};

palindromo(texto);