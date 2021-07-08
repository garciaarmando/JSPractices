const json = {
    cadena: "Armando",
    numero: 26,
    booleano: true,
    arreglo: ["Code", "Videogames", "Space"],
    objeto: {
        twitter: "armando",
        email: "armandobfmv@gmail.com",
    },
    nulo: null,
};
console.log(json);

//parse() analiza una notación JSON y la convierte a un tipo de dato que acepte JS (ARRAY, OBJECT,BOOLEAN, ETX)
console.log(
    JSON.parse(
        '{"cadena": "Armando","numero": 26,"booleano": true,"arreglo":["Code", "Videogames", "Space"],"objeto": { "twitter": "armando", "email":"armandobfmv@gmail.com" },"nulo": null}'
    )
); //De notación JSON lo transforma a un objeto aceptado en JS

//stringify -> convierte un objeto o valor válido en JS y lo convierte a cadena de texto

console.log(JSON.stringify(json)); //nuestro objeto JSON fue convertido a notación JSON