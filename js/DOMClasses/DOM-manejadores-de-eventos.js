/* Función manejadora

Cuando una función se convierte en manejadora de un evento es posible acceder dentro de ella al evento en sí mismo*/

//event está depreciado, es decir, ya no se recomienda su uso
holaMundo = () => {
    alert("Hola Mundo");
    console.log(event);
};

const $eventoSemantico = document.getElementById("evento-semantico");
// $eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = (e) => {
    alert("Hola Mundo");
    console.log(e);
};

//addEventListener acepta más de una consecuencia para elemento que tiene asociado un manejador de eventos
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo");
    console.log(e);
});
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo 2");
    console.log(e.type);
    console.log(e.target);
});