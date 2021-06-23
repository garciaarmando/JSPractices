//Haciendo "hablar" al navegador
let texto = "Hola";
const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};
hablar(texto);