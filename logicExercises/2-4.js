// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = "", patron = "") => {
    !texto
        ?
        console.warn("No se ingresó ningún texto") :
        !patron ?
        console.warn("No se ingresó el patrón de caracteres") :
        console.info(texto.replace(new RegExp(patron, "ig"), ""));
};

eliminarCaracteres("lala1,lala2,lala3,lala4,lala5", "lala");