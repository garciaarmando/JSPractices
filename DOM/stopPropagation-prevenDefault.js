//stopPropagation útil para cuando no se desea que la propagación ocurra
//preventDefault para prevenir el evento por default de eventos como el submmit o acciones como el scroll con el teclado o el comportamiento de la aplicación cuando se da click en enlaces

let $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(
        `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
    );
    //detiene la propagación de burbuja o de captura
    e.stopPropagation();
}
$divsEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos);
});
$linkEventos.addEventListener("click", (e) => {
    alert("Click detectado");
    //cancela la acción que tiene por defecto el elemento, en este caso y al tratarse de un <a></a>, previene que se abra el enlace
    e.preventDefault();
    // e.stopPropagation();
});