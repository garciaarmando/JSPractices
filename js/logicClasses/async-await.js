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