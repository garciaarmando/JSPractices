//react router, vue router, pages js son librerías construídas usando los objetos url e historial
console.log("*****OBJETO URL (AKA location)*****");
//devuelve un objeto con diversas propiedades relacionadas a la url del navegador
console.log(location);
//Para saber el servidor o ruta local donde se alojan los archivos
console.log(location.origin);
//http/https/file://
console.log(location.protocol);
//el dns
console.log(location.host);
//muy parecido a host
console.log(location.hostname);
//puerto por el que está escuchando la app
console.log(location.port);
//la url completa
console.log(location.href);
//detectar el valor de la url que está después de un hash (#contacto, p.ej.)
console.log(location.hash);
//para detectar qué parámetros se están pasando a traves de la url (.com?nombre=Armando&edad=25, p.ej.

console.log(location.search);
//lo que viene después del host, es decir, el archivo que se está consultando
console.log(location.pathname);

console.log("*****OBJETO History*****");
console.log(history);
//el # de ventanas hacia atrás o hacia adelante a las que puedo acceder sin cambiar de pestaña en el navegador (estando en una tienda en línea y navegando esta ruta: home->hombres->camisas->estampadas) la longitud sería 4
console.log(history.length);
//para navegar entre páginas como si usáramos los botones de hacia atrás y hacia adelante
//en el ejemplo de la tienda, esto nos regresaría hasta el home
history.back(3);
//en el ejemplo de la tienda, esto nos regresaría hasta estampadas
history.forward(3);
//el método go espera como parámetro un valor positivo o negativo >=1, si el número es negativo irá el número de páginas hacia atrás indicado, de ser positivo irá hacia adelante
// history.go(0);
console.log("*****OBJETO Navigator (AKA location)*****");
//indica información de la conección del usuario
console.log(navigator.connection); //también devuelve un objeto
//localización del usuario
console.log(navigator.geolocation);
//api para dispositivos como cámara y micrófonos
console.log(navigator.mediaDevices);
//tipos de formato que acepta el navegador
console.log(navigator.mimeTypes);
//si el navegador tiene conexión, la ha perdido o la vuelve a recuperar es un booleano
console.log(navigator.onLine);
//una api que ayuda a hacer PWA
console.log(navigator.serviceWorker);
//el api de almacenamiento (webStorage y localStorage)
console.log(navigator.storage);
//para saber cuando se conectan o se extraen dispositivos usb
console.log(navigator.usb);
//información sobre el navegador que está ejecutando la aplicación
console.log(navigator.userAgent);