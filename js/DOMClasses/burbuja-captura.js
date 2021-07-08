let $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    console.log(
        `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
    );
}
$divsEventos.forEach((div) => {
    //captura con objeto en caso de que se necesite hacer referencia a un parámetro
    div.addEventListener("click", flujoEventos, {
        //falso = bubble, true = capture
        capture: true,
        //para que el evento se ejecute una sola vez (true) o varias (false)
        once: true,
    });
});