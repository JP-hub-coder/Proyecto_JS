const usuario = document.getElementById("username");
const contraseña = document.getElementById("password");
const ingresar = document.getElementById("ingresar");
const min_container = document.querySelector(".min_container");

const usuarios =JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios);

ingresar.addEventListener("click", ()=>{
    for (let index = 0; index < usuarios.length; index++) {
        if (usuario.value === usuarios[index]['Email'] && contraseña.value === usuarios[index]['contraseña']){
            console.log("De aqui pasa al dashboard");
            break
        }else if(usuario.value === usuarios[index]['Email'] && contraseña.value !== usuarios[index]['contraseña']){
            usuario.style.borderColor="red"
            contraseña.style.borderColor="red"
            min_container.innerHTML+=`<small style="color:red;">Contraseña o usuario incorrecto</small>`
            break
        }
    }
    usuario.style.borderColor="red"
    contraseña.style.borderColor="red"
    min_container.innerHTML+=`<small style="color:red;">No existe el usuario</small>`
})