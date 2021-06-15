/*
27)

Programa una clase llamada Pelicula usando sólo vanila JS.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
(IN PROGRESS)Todos los datos del objeto son obligatorios.
(DONE)Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
(DONE)Valida que el título no rebase los 100 caracteres.
(DONE)Valida que el director no rebase los 50 caracteres.
(DONE)Valida que el año de estreno sea un número entero de 4 dígitos.
(DONE)Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
(DONE)Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validadorPais(pais);
        this.validadorGeneros(generos);
    }

    static get listaGeneros() {
        return [
            "Action",
            "Adult",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Film Noir",
            "Game-Show",
            "History",
            "Horror",
            "Musical",
            "Music",
            "Mystery",
            "News",
            "Reality-TV",
            "Romance",
            "Sci-Fi",
            "Short",
            "Sport",
            "Talk-Show",
            "Thriller",
            "War",
            "Western",
        ];
    }

    static generosAceptados() {
        return console.info(
            `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
        );
    }

    //validar que la cadena lo sea y que no venga vacía

    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor} está vacío"`);
        if (typeof valor !== "string")
            return console.error(
                `${propiedad} "${valor}" ingresado NO es una cadena de texto`
            );

        return true;
    }

    //Validar la longitud de la cadena para director y título y que el valor de esta propiedad sea texto

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud)
            return console.error(
                `${propiedad} "${valor}" excede el número de caracteres permitidos que es de ${longitud}`
            );
        return true;
    }

    //validar que año lo sea y no se vaya vacío
    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor} está vacío"`);
        if (typeof valor !== "number")
            return console.error(`${propiedad} "${valor}" ingresado NO es un número`);

        return true;
    }

    //Validador de arreglos para país y géneros

    validarArreglo(propiedad, arr) {
        if (!arr) return console.warn(`${propiedad} "${arr} está vacío"`);
        if (!(arr instanceof Array))
            return console.error(`${propiedad} "${arr}" ingresado no es un arreglo`);
        if (arr.length === 0)
            return console.error(`La longitud de "${arr}" no puede ser menor a 1`);
        for (let cadena of arr) {
            if (typeof cadena !== "string")
                return console.error(
                    `El valor ${cadena} ingresado NO es una cadena de texto`
                );
        }

        return true;
    }

    //validar que id tenga el formato AA1234567

    validarIMDB(id) {
        if (this.validarCadena("IMDB id", id)) {
            if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
                return console.error(
                    `IMDB id "${id}" NO es válido, debe tener 9 caracteres con las siguientes características: los dos primeros deben ser letras minúsculas y los 7 restantes números. Verifique sus datos ingresados`
                );
            }
        }
    }

    //validar que título tenga -100 caracteres

    validarTitulo(titulo) {
        if (this.validarCadena("Titulo", titulo))
            this.validarLongitudCadena("Titulo", titulo, 100);
    }

    //validar que duirector tenga -50 caracteres

    validarDirector(director) {
        if (this.validarCadena("Director", director))
            this.validarLongitudCadena("Director", director, 50);
    }
    validarEstreno(estreno) {
        if (this.validarNumero("Año de estreno", estreno)) {
            if (!/^([0-9]){4}$/.test(estreno)) {
                return console.error(
                    `Año de estreno "${estreno}" NO es válido, debe ser un número de cuatro dígitos`
                );
            }
        }
    }

    //validar que país sea arreglo, tipo texto y no venga vacío
    validadorPais(pais) {
        if (this.validarArreglo("País", pais)) {}
    }
    validadorGeneros(generos) {
        if (this.validarArreglo("Géneros", generos)) {}
    }
}
// Pelicula.generosAceptados();
const pelicula = new Pelicula({
    id: "tt1234567",
    titulo: "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
    director: "12345678901234567890123456789012345678901234567890",
    estreno: 2020,
    pais: ["Mexico"],
    generos: ["Comedia", "Humor Negro"],
});