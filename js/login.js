const usuario = document.getElementById("username");
const contraseña = document.getElementById("password");
const ingresar = document.getElementById("ingresar");
const min_container = document.querySelector(".min_container");

const usuarios =JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios);

ingresar.addEventListener("click", ()=>{
    for (let index = 0; index < usuarios.length; index++) {
        if (usuario.value === usuarios[index]['Email'] && contraseña.value === usuarios[index]['contraseña']){
            //console.log("De aqui pasa al dashboard");
            verificarRedireccion(usuarios[index])
            break
        }else if(usuario.value === usuarios[index]['Email'] && contraseña.value !== usuarios[index]['contraseña']){
            usuario.style.borderColor="red"
            contraseña.style.borderColor="red"
            min_container.innerHTML+=`<small style="color:red;">Contraseña o usuario incorrecto</small>`
            break
        }
    }
    
})

function verificarRedireccion(data){
    //console.log(data);
    if (data['rol'] == 'estudiante'){
        localStorage.setItem("User", data['Nombre'])
        localStorage.setItem("Email", data['Email'])
        window.location.replace("./ABC_Educativa.html")

    }else if(data['rol'] == 'profesor'){
        window.location.replace("./teacher.hmtl")
        
    }else if(data['rol'] == 'admin'){
        window.location.replace("./dashboard.html")
    }
}