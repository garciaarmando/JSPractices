const persona = {
    nombre: "",
    apellido: "",
    edad: 0,
};

//defininiendo el handler del proxy
//set es la propiedad que manejará todas las validaciones de nuestro objeto y recibe tres parámetros: el objeto, las propiedades a evaluar y el valor de dichas propiedades
const manejador = {
    set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(
                `La propiedad "${prop}" no existe en el objeto persona por lo que no se le puede asignar un valor`
            );
        }
        if (
            (prop === "nombre" || prop === "apellido") &&
            !/^[A-Za-ÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor)
        ) {
            return console.error(
                `La propiedad ${prop} sólo acepta letras y espacios en blanco`
            );
        }
        //esta línea inicializa las propiedades del proxy y les añade el valor declarado
        obj[prop] = valor;
    },
};

//generación de persona con proxies
//proxie recibe un objeto y el mencionado handler

const armando = new Proxy(persona, manejador);

//esta asignación de valores a las propiedades, son las que ejecutan el manejador
armando.nombre = "Armando";
armando.apellido = "Garcia";
armando.edad = 26;
//esta propiedad que originalmente no era parte del objeto persona, se le asigna también a éø debido a la vinculación que existe entre el proxy armando y el proxy persona
armando.twitter = "@armandopsi";
console.log(armando);
console.log(persona);