let cedula = 1234567890
let nombrecompleto = 'Mateo Tacuri';
let celular = 123456
let correo = 'mateo@gmail.com'
let cuota = 50

//METODOS

console.log(cedula.length);
console.log(nombrecompleto.trim());
console.log(celular.includes('1'));
console.log(nombrecompleto+correo);
entradacuota === 25 ? console.log("Registro de Cuota"):console.log("no registro de cuota");

const datosPersona ={
    name:"Mateo",
    age:21,
    address:{
        city:"Quito",
        telephone:123456
    },
    friends:['Mateo','Eduardo','Juan'],      
    status:false,
    girlfriend:'en espera'
}


delete datosPersona.girlfriend

console.log(datosPersona)

//FUNCIONES

function getnombre() {
    console.log(nombrecompleto)
}

getnombre()

const ValidarEmail=function (correo) {
    console.log("Correo Correcto")
}

ValidarEmail("mateo@gmail.com")

