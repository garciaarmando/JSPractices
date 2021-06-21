let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
    [`id_${aleatorio}`]: "Valor aleatorio",
};

console.log(objUsuarios);
const usuarios = ["Armando", "Jon", "María", "Dexter", "Jenny"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);