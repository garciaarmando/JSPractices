//delegar eventos optimiza el uso de recursos de la aplicación
//Delegación de eventos es asignar el event listener al formulario como tal, de tal manera que por ejemplo, en un formulario con determinada cantidad de inputs, no estaríamos asignando un event listener por cada input sino optaremos por colocárselo al formulario como tal.
//la delegación de eventos también evita la propagación

function flujoEventos(e) {
    console.log(
        `Hola te saluda ${this}, el click lo originó ${e.target.className}`
    );
}

//debido a que document tiene asignado el event listener y no hay ningún elemento por encima de él, se vuelve innecesario colocar un stopPropagation
document.addEventListener("click", (e) => {
    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }
    if (e.target.matches(".eventos-flujo a")) {
        alert("click detectado");
        e.preventDefault();
    }
});