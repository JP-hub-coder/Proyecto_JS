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
const identificacion= document.getElementById("identificacion")

btn.addEventListener("click", ()=>{
    const users = JSON.parse(localStorage.getItem("Estudiantes"))
    let canPush = true;
    for (let index = 0; index < users.length; index++) {
        if(users[index]['Email'] !== email.value){
        
        }else{
            document.querySelector(".container").innerHTML+=`<small style="color:red">Ya tienes una cuenta, ¡Inicia Secion!</small>`;
            email.style.borderColor ="red";
            user.style.borderColor ="red";
            password.style.borderColor ="red";
            birth.style.borderColor="red"
            canPush = false;
        }
        
    }
    let nombre = user.value.split(' ')
    data = {
        codigo: generarID(),
        identificacion: identificacion.value,
        nombres: nombre[0],
        apellidos: nombre[1],
        Email: email.value,
        contraseña: password.value,
        foto: `https://randomuser.me/api/portraits/men/9.jpg`,
        cursos: []
    }
    if(canPush == true){
        users.push(data)
        localStorage.setItem("Estudiantes", JSON.stringify(users))
        window.location.replace("./login.html")
    }
    
})
function generarID(){
    return Math.floor(1000 + Math.random() * 9000);
}