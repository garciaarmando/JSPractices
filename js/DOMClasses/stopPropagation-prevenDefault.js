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