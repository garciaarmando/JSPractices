const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo;
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            setTimeout(() => {
                d.querySelector(btnPlay).disabled = false;
            }, 1000);
        }
    });
}
export function alarm(sound, btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 1000);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo);
            $alarm.pause(); //pausa el sonido, pero mantiene la marca de tiempo para reproducir a la siguiente vez en desde ese mismo tiempo
            $alarm.currentTime = 0; //resetea  al marca de tiempo del audio al seg 0
            d.querySelector(btnPlay).disabled = false;
        }
    });
}