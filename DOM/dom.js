//para obtener todo el mapeo del documento html completo
console.log(document);
//Para obtener el head de un HTML
console.log(document.head);
//para obtener el body
console.log(document.body);
//para obtener el html
console.log(document.documentElement);
//el tipo de documento
console.log(document.doctype);
//acceder al juego de caracteres que tiene el documento
console.log(document.characterSet); //UTF-8
//acceder al título del documento
console.log(document.title); //DOM
//acceder a la colección de enlaces
console.log(document.links); //aunque el resultado arroja corchetes, NO se trata de un arreglo
//acceder a la colección de imágenes
console.log(document.images);
//acceder a la coleccion de formularios
console.log(document.forms);
//acceder a la colección de estilo que tiene enlazadas el documento
console.log(document.styleSheets);
//acceder a la colección de script
console.log(document.scripts);
//para mapear la selección que haga el usuario del contenido del viewport
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 2000);
//escribir sobre el documento soportando sintaxis html
document.write("<h2>Hola</h2>");