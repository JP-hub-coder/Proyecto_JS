const estudiante = [localStorage.getItem("User"), localStorage.getItem("Email")]
console.log(estudiante);
const users = JSON.parse(localStorage.getItem("usuarios"))
const cursos = JSON.parse(localStorage.getItem("cursos"))

const btnCursos = document.getElementById("cursos");
const btnCursosTotal = document.getElementById("cursos-total")
const perfil = document.getElementById("perfil")

function getUserData(){
    for(let i = 0; i<users.length; i++){
        if (users[i]['Nombre'] === estudiante[0]) {
            return users[i]
        }
    }
}
function verificarFocus(){
    if(btnCursos.classList.contains("focus")){
        btnCursos.classList = "pages-button"
    }
    if(btnCursosTotal.classList.contains("focus")){
        btnCursosTotal.classList = "pages-button"
    }
    if(perfil.classList.contains("focus")){
        perfil.classList = "pages-button"
    }
    return null
}

btnCursos.addEventListener("click", ()=>{
    verificarFocus()
    btnCursos.classList+=" focus"


    data = getUserData();
    console.log(cursos);
    document.querySelector(".cursos-container").innerHTML=""
    
    for(let i = 0; i< cursos.length; i++){
        if(data['cursos'].includes(cursos[i]['Nombre'])){
            //console.log("el curso "+cursos[i]['Nombre']+" Esta en este estudiante")
            document.querySelector(".cursos-container").innerHTML+=`
                <div class="curso-card">
                    <img src="../media/curso1" alt="Curso 1">
                    <h3>${cursos[i]['Nombre']}</h3>
                    <p>${cursos[i]['Descripcion']}</p>
                    <button class="abrir-${cursos[i]['id']} button-curso" onClick="AbrirCurso(${cursos[i]['id']})">Ver</button>  
                </div>
            `
        }
    }
})

btnCursosTotal.addEventListener("click", ()=>{
    verificarFocus();
    btnCursosTotal.classList+=" focus"
    document.querySelector(".cursos-container").innerHTML=""
    for(let i = 0; i< cursos.length; i++){
        //console.log("el curso "+cursos[i]['Nombre']+" Esta en este estudiante")
        document.querySelector(".cursos-container").innerHTML+=`
            <div class="curso-card">
                <img src="../media/curso1" alt="Curso 1">
                <h3>${cursos[i]['Nombre']}</h3>
                <p>${cursos[i]['Descripcion']}</p>
                <button class="ver_prog button-curso">Ver</button>  
            </div>
        `
        
    }
})