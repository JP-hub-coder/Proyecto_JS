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
console.log(birth.value)

//Local storage
const btn = document.querySelector(".iniciar_sesión")

const email = document.getElementById("email");
const user = document.getElementById("username");
const password = document.getElementById("password")

btn.addEventListener("click", ()=>{
    const users = JSON.parse(localStorage.getItem("usuarios"))
    data = {
        "Nombre":user.value,
        "Email":email.value,
        "nacimiento":birth.value,
        "contraseña":password.value,
        "rol":"estudiante"
    }
    users.push(data)
    localStorage.removeItem("usuarios")
    localStorage.setItem("usuarios", JSON.stringify(users))
})