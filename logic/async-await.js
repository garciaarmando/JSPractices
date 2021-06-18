//las funciones asíncronas esperan a que algo se cumpla para continuar ejecutando determinado proceso

//async -await trabajan en conjunto con las promesas

//usando async-await
//dentro conviene trabajar con bloques try-catch

function cuadradoPromise(value) {
    if (typeof value !== "number")
        return Promise.reject(
            `Error: el valor '${value}' ingresado no es un número`
        );
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value,
            });
        }, 0 | (Math.random() * 1000));
    });
}

// async function funcionAsincronaDeclarada() {
//     try {
//         console.log("Inicio de Async function");
//         let obj = await cuadradoPromise(0);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//         obj = await cuadradoPromise(1);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//         obj = await cuadradoPromise(2);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//         obj = await cuadradoPromise(3);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//         obj = await cuadradoPromise(4);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//         obj = await cuadradoPromise("5");
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//     } catch (error) {
//         console.error(error);
//     }
// }

const funcionAsincrona = async() => {
    try {
        console.log("Inicio de Async function");
        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        console.log("Fin de Async function");
    } catch (error) {
        console.error(error);
    }
};

funcionAsincrona();

/*
métodos para trabajar la sincronía: 

.then() Ejecuta la función callback resolve cuando la promesa se cumple
.catch() ejecuta el reject
*/

/*
cuadradoPromise(0)
    .then((obj) => {
        console.log("Inicia Promise");
        console.log(`Promise:${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then((obj) => {
        console.log(`Promise:${obj.value}, ${obj.result}`);
        return cuadradoPromise("2"); //caerá en el catch
    })
    .then((obj) => {
        console.log(`Promise:${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then((obj) => {
        console.log(`Promise:${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then((obj) => {
        console.log(`Promise:${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then((obj) => {
        console.log(`Promise:${obj.value}, ${obj.result}`);
        console.log("Fin Promise");
    })
    .catch((err) => console.error(err));
*/