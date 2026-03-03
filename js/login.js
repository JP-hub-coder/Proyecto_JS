const usuario = document.getElementById("username");
const contraseña = document.getElementById("password");
const ingresar = document.getElementById("ingresar");

const usuarios =JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios);
