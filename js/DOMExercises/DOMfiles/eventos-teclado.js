const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

    switch (e.keyCode) {
        case 37:
            //left
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            //up

            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }

            break;
        case 39:
            //right

            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            //down
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 1}10px)`;
}

export function shortCuts(e) {
    if (e.key === "a" && e.altKey) {
        alert("Has lanzado una alerta con el teclado");
    }
    if (e.key === "c" && e.altKey) {
        confirm("Has lanzado una confirmación con el teclado");
    }
    if (e.key === "p" && e.altKey) {
        prompt("Has lanzado un prompt con el teclado");
    }
}