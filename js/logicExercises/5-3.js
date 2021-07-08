// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe mi función (new Date(1984,4,23)) devolverá 35 años en 2020

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste la fecha");
    if (!(fecha instanceof Date))
        return console.warn("El valor que ingresaste no es una fecha valida");
    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMilisegundos = 1000 * 60 * 60 * 24 * 365;
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilisegundos);
    return Math.sign(aniosHumanos) === -1 ?
        console.info(
            `Faltan ${Math.abs(
          aniosHumanos
        )} años para el año ${fecha.getFullYear()}`
        ) :
        Math.sign(aniosHumanos) === 1 ?
        console.info(
            `Han pasado ${aniosHumanos} años desde el año ${fecha.getFullYear()}`
        ) :
        console.info(
            `No hay diferencia, estamos en el año ${fecha.getFullYear()}`
        );
};

calcularAnios(new Date(2084, 3, 09));