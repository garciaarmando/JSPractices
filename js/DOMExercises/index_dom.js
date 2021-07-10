import scrollTopButton from "./DOMfiles/button_scroll.js";
import countdown from "./DOMfiles/countdown.js";
import darkTheme from "./DOMfiles/dark-mode.js";
import { moveBall, shortCuts } from "./DOMfiles/eventos-teclado.js";
import hamburgerMenu from "./DOMfiles/menu_hamburguesa.js";
import { alarm, digitalClock } from "./DOMfiles/reloj.js";
import responsiveMedia from "./DOMfiles/responsive-object.js";
import responsiveTester from "./DOMfiles/responsive-tester.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm(
        "../../assets/sounds/alarm.mp3",
        "#activar-alarma",
        "#desactivar-alarma"
    );
    countdown("countdown", "Jan 04, 2022 00:00:00", "Felices 27 🤓");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=btmN-bWwv0A&t=222s" target="_blank" rel="noopener>Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/btmN-bWwv0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/MwJXXcVBhiuL1AQs9" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21377016.780480374!2d98.79935544871296!3d31.985257208835545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sAlemania!5e0!3m2!1ses!2sus!4v1625874454528!5m2!1ses!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    responsiveTester("responsive-tester");
});

d.addEventListener("keydown", (e) => {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");