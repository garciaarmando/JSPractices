import countdown from "./DOMfiles/countdown.js";
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
    countdown("countdown", "Jan 04, 2022 05:32:00", "Felices 27 🤓");
});

d.addEventListener("keydown", (e) => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
});