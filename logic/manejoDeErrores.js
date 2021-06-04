//Es buena práctica englobar todo el código en un try catch para manejar los errores

//En cuanto try detecte un error, pausa la ejecución del código en su bloque y devuelve lo que catch capturó
try {
    console.log("en try se agrega el código a evaluar");
    noExiste;
} catch (error) {
    console.log("catch captura cualquier error surgido o lanzado en el try");
    console.log(error);
} finally {
    console.log(
        "Este bloque se ejecutara siempre al final de un bloque try-catch"
    );
}

//error personalizado con throw new Error ("Mensaje de error")
try {
    let numero = "y";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un número");
    }
    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}