const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
    //método para abrir una ventana
    ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e) => {
    //método para cerrar ventana que haya sido abierta por el método open
    ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
    //el método que permite que se imprima la ventana
    window.print();
});