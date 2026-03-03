// Variables para el input de la fecha
const fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

const birth = document.getElementById("birthdate")
birth.valueAsDate = fecha
verificarFecha()

//funcion para el maximo de la fecha
function verificarFecha(){
    if (mes < 10) {
        mes = `0${mes}`
    }
    if(dia < 10){
        dia = `04${dia}`
    }
    birth.max = `${anio}-${mes}-${dia}`
}

//Local storage
