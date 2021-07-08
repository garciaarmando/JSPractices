import { moveBall, shortCuts } from "./DOMfiles/eventos-teclado.js";
import hamburgerMenu from "./DOMfiles/menu_hamburguesa.js";
import { alarm, digitalClock } from "./DOMfiles/reloj.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm(
        "../../assets/sounds/alarm.mp3",
        "#activar-alarma",
        "#desactivar-alarma"
    );
});
//keydown presionar tecla
//keyup dejar de presionarla
//keypress mientras se mantenga presionada la tecla
d.addEventListener("keydown", (e) => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
});