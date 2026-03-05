let usuario = document.getElementById("username");
let contraseña = document.getElementById("password");
const ingresar = document.getElementById("ingresar");
const min_container = document.querySelector(".min_container");

const Estudiantes =JSON.parse(localStorage.getItem("Estudiantes"))
const Profesores=JSON.parse(localStorage.getItem("Docentes"));
const Admins = JSON.parse(localStorage.getItem("Administrativos"))


ingresar.addEventListener("click", ()=>{
    let isEstudent = verificarUsuario(Estudiantes, "Estudiante")
    let isProf = verificarUsuario(Profesores, "Profesor")
    let isAdm = verificarUsuario(Admins, "Admin")
    //console.log(isAdm);
    verificarRedireccion(isEstudent)
    verificarRedireccion(isProf)
    verificarRedireccion(isAdm)
    

    
})

function verificarUsuario(rol, rolName){
    if(rol == null){
        console.log("D:");
        
    }else{
        for (let index = 0; index < rol.length; index++) {
            if (usuario.value === rol[index]['Email'] && contraseña.value === rol[index]['contraseña']){
                let userdata = [true ,rolName, rol[index]['nombres'], rol[index]['Email']]
                //console.log(userdata);
                
                return userdata
            }else if(usuario.value === rol[index]['Email'] && contraseña.value !== rol[index]['contraseña']){
                usuario.style.borderColor="red"
                contraseña.style.borderColor="red"
                min_container.innerHTML+=`<small style="color:red;">Contraseña o usuario incorrecto</small>`
                return false
            }
        }
    }
    
}

function verificarRedireccion(rol){
    //console.log(rol);
    if(Array.isArray(rol)){
        localStorage.setItem("User", rol[2])
        localStorage.setItem("Email", rol[3])
        if (rol[1] == 'Estudiante'){
            window.location.replace("./ABC_Educativa.html")
        }else if(rol[1] == 'Profesor'){
            window.location.replace("./teacher.hmtl")
            
        }else if(rol[1] == 'Admin'){
            window.location.replace("./dashboard.html")
        }
    }else{
        console.log("Es falso");
        
    }
    
}