//implementación que viene a mejorar la forma en como se escriben funciones, da más expresividad y síntesis a la escritura de códigfo
//nueva forma de definir funciones anónimas que sean expresadas

//función expresada = cuando a una variable le asignas el valor de una función anónima

const saludo = function() {
    console.log("Hola");
};

//función declarada que sufre de hoisting y pueded ejecutarse incluso antes de haberse declarado
saludar();

function saludar() {
    console.log("Hola");
}
saludar();