console.log(window);

//estos métodos cuelgan del objeto global window, pero no es necesario instanciar a window para ejecutarlos

//.alert envvía una ventana de alerta al navegador
//////alert("Test de alerta");
//.confirm se diferencía de alert en que tiene un botón de aceptar y otro para cancelar
/////confirm("Test de confirmación");
//.promt permite al usuario ingresar un valor
/////prompt("Ingrese su valor");
let alerta = alert("Esto es una alerta desplegada en el navegador");
confirmation = confirm("¿Esta seguro de que desea continuar?");
valorUsuario = prompt("Ingrese cualquier valor");
console.log(alerta); //undefined
console.log(confirmation); //true or false
console.log(valorUsuario); //valor del usuario o null en caso de que el usuario elija cancelar