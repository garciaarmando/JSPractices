const saludar = (nombre = "Desconocido") => {
    alert(`Hola ${nombre}`);
};

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", (e) => {
    saludar("Armando");
    saludar("Humberto");
    saludar("Ulises");
    console.log(e);
});

const $eventoRemover = document.getElementById("evento-remover");

//removerDoble click empaqueta la lógica de la fuinción manejadora
const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);

    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
};
//como segundo parámetro sólo pasamos la función manejadora declarada previamente
$eventoRemover.addEventListener("dblclick", removerDobleClick);