//funciones que se ejecutan al momento de cargar el archivo de lógica en el navegador

//clásica
(function(d, w, c) {
    console.log("2da IIFE");
    console.log(d);
    console.log(w);
    c.log("test");
})(document, window, console);

//versión unaria sin necesidad de paréntesis
+
(function() {
    console.log("Versión unaria");
})();

//Facebook
!(function() {
    console.log("Versión facebook");
})();