//JS es un lenguaje de un solo subproceso o hilo (single thread), pero tiene procesamiento Multi thread, como consecuencia, no se pueden realizar operaciones largas sin  que se bloquee el hilo principal, por ejemplo una petición a una API Es aquí donde entra la asincronía, que impide que el hilo principal se bloquee

/*//////procesamiento single thread y multi thread

single thread: JS sólo puede correr sólo una instrucción a la vez, para operaciones de entrada y salida

el multi thread es manejado por el event loop con el siguiente principio:"las peticiones nuevas van al final del call stack y las viejas en la cabeza del stack (FIFO), sin embargo, si algunas de ellas se resuelven antes, irán saliendo conforme esto suceda. Gradualmente las órdenes menos complicadas serán resueltas primero, posteriormente las que le sigan en complejidad y al final las más complicadas hasta terminar con el event loop

*/

/*//////Operaciones de CPU y Operaciones de entrada por salida

CPU: son aquellas que van a pasar el  mayor tiempo consumiendo los procesos de la cpu, como un callback hell

operaciones de entrada por salida I/O: Aquellas que van a pasarla maor cantidad del tiempo esperando la respuesta del recurso solicitado (validación de formularios en el backend, un pago en línea, peticiones a la API)

*/

/*//////Operaciones concurrentes y paralelas

concurrentes: capacidad de procesar más de una tarea al mismo tiempo, estas tareas pueden ser en un ambiente sínrono o asíncrono

paralelismo:  sigue la filosofía de divide y venceras: toma la tarea inicial, la divide en subtareas y cada una de esas fracciones es procesada de forma concurrente

En el paralelismo todos los procesos concurrentes están relacionados a resolver dicho problema, el resultado de unos afecta al resultado global final
*/

/*//////Operaciones bloqueantes y no bloqueantes

bloqueante: es aquella que no devolverá el control a la aplicación hasta que la tarea se haya conpletado (un alert, por ejemplo)

no bloqueante: las operacione se ejecutan y devuelven el control al hilo principal, sin importar o no que se haya concluído
*/

/*/////Operaciones síncronas y asíncronas

Ambas se refieren al tiempo en el que tendrá lugar la respuesta

síncrono =  respuesta inmediata
asíncrona = la tarea  se ejecuta, suelta el hilo y se queda en espera de la respuesta
*/

//síncrono bloqueante -  cada ejecución de una operación bloquea el flujo del hilo principal (event loop) bloqueando la respuesta de la aplicación hasta que la tarea se complete

// (() => {
//     console.log("Código síncrono");
//     console.log("Inicio");

//     function dos() {
//         console.log("Dos");
//     }

//     function uno() {
//         console.log("Uno");
//         dos();
//         console.log("Tres");
//     }
//     uno();
//     console.log("Fin");
// })();
// console.log("*******");

//asíncrono no bloqueante

(() => {
    console.log("Código síncrono");
    console.log("Inicio");

    function dos() {
        setTimeout(function() {
            console.log("Dos");
        }, 1000);
    }

    function uno() {
        setTimeout(function() {
            console.log("Uno");
        }, 0);

        dos();
        console.log("Tres");
    }
    uno();
    console.log("Fin");
})();