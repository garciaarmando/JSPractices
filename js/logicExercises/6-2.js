//programa una función que valide que un texto sea un nombre válido

const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No se ingresó una cadena de texto");
    if (typeof nombre !== "string")
        return console.error("Los caracteres numéricos no son aceptados");
    let expRegNombre =
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
            nombre
        );
    return expRegNombre ?
        console.info(`El nombre ${nombre} es un nombre válido`) :
        console.info(`El nombre ${nombre} NO es un nombre válido`);
};

//put a name
validarNombre(3);