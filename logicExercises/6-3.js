//programa una función que valide si un mail ingresado es correcto

const validadorEmail = (email = "") => {
    if (!email) return console.warn("No se ingresó ningún email");
    if (typeof email !== "string")
        return console.error(`El valor ${email} no contiene caracteres válidos`);
    if (
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            email
        )
    ) {
        return console.warn(
            `La cadena ${email} tiene el formato de un email válido`
        );
    } else {
        return console.info(
            `La cadena ${email} NO tiene el formato de un email válido`
        );
    }
};

validadorEmail("a little.lengthy.but.fine@dept.example.com");