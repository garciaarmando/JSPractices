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
(DONE)Valida que los géneros sean introducidos en forma de arreglo.
(done)Valida que los géneros introducidos esten dentro de los géneros aceptados*.
(DONE)Crea un método estático que devuelva los géneros aceptados*.
(DONE)Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
(DONE)Crea un método que devuelva toda la ficha técnica de la película.
(DONE)Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

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
        this.validarCalificacion(calificacion);
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

    //validar que estreno sea número y de 4 dígitos
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
        if (this.validarArreglo("Géneros", generos)) {
            for (let genero of generos) {
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificación", calificacion)) {
            return calificacion < 0 || calificacion > 10 ?
                console.error(
                    `La calificación ${calificacion} es incorrecta, esta debe ser un número entre 0 y 10 pudiendo ser decimal de una posición`
                ) :
                (this.calificacion = calificacion.toFixed(1));
        }
    }

    fichaTecnica() {
        console.info(
            `Ficha Técnica:\n 
            IMBD id: "${this.id}"\n
            Título:"${this.titulo}"\n
            Director: '${this.director}'\n
            Año de estreno: "${this.estreno}"\n
            País: '${this.pais.join("-")}'\n
            Géneros: '${this.generos.join(", ")}'\n
            Calificación: "${this.calificacion}"`
        );
    }
}

const tresPeliculas = [{
        id: "tt8772262",
        titulo: "Midsomar",
        director: "Ari Aster",
        estreno: 2019,
        pais: ["E.U.A"],
        generos: ["Drama", "Horror", "Mystery"],
        calificacion: 7.1,
    },
    {
        id: "tt0790636",
        titulo: "Dallas Buyers Club",
        director: "Jean-Marc Vallée",
        estreno: 2013,
        pais: ["E.U.A"],
        generos: ["Drama"],
        calificacion: 8,
    },
    {
        id: "tt0468569",
        titulo: "The Dark Knight",
        director: "Christopher Nolan",
        estreno: 2008,
        pais: ["E.U.A"],
        generos: ["Action", "Crime", "Drama"],
        calificacion: 9,
    },
];

tresPeliculas.forEach((el) => new Pelicula(el).fichaTecnica());