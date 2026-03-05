const estudiante = [localStorage.getItem("User"), localStorage.getItem("Email")]
console.log(estudiante);
const users = JSON.parse(localStorage.getItem("Estudiantes"))
const cursos = JSON.parse(localStorage.getItem("cursos_storage"))

const btnCursos = document.getElementById("cursos");
const btnCursosTotal = document.getElementById("cursos-total")
const perfil = document.getElementById("perfil")

function getUserData(){
    for(let i = 0; i<users.length; i++){
        if (users[i]['nombres'] === estudiante[0]) {
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
    document.querySelector(".cursos").classList = "cursos"


    let data = getUserData();
    document.querySelector(".cursos-container").innerHTML=""
    
    for(let i = 0; i< cursos.length; i++){
        if(data['cursos'].includes(cursos[i]['nombre'])){
            document.querySelector(".cursos-container").innerHTML+=`
                <div class="curso-card">
                    <h3>${cursos[i]['nombre']}</h3>

                    <button class="abrir-${cursos[i]['codigo']} button-curso" onClick="AbrirCurso(${cursos[i]['codigo']})">Ver</button>  
                </div>
            `
        }
    }
})

btnCursosTotal.addEventListener("click", ()=>{
    verificarFocus();
    btnCursosTotal.classList+=" focus"
    document.querySelector(".cursos").classList = "cursos"
    document.querySelector(".cursos-container").innerHTML=""
    //console.log(document.querySelector(".cursos-container"))
    for(let i = 0; i< cursos.length; i++){
        //console.log("el curso "+cursos[i]['nombre']+" Esta en este estudiante")
        document.querySelector(".cursos-container").innerHTML+=`
            <div class="curso-card">
                <h3>${cursos[i]['nombre']}</h3>
                <button class="ver_prog button-curso">Ver</button>  
            </div>
        `
        
    }
})

//Abrir curso
function AbrirCurso(curso){
    for (let index = 0; index < cursos.length; index++) {
        if(cursos[index]['codigo'] == curso){
            mostrarCurso(cursos[index])
        }
        
    }
}
function mostrarCurso(curso){
    let leccion = 1

    //Borramos el html de cualquier cosa anterior
    document.querySelector(".cursos").innerHTML=""
    document.querySelector(".curso-leccion-container").classList = "curso-leccion-container"


    //Muestra la lista de lecciones
    document.querySelector(".lecciones").innerHTML=``
    let html = `<ol>`
    for(let i = 0; i<curso['lecciones'].length; i++){
        html += `<li>Leccion ${i+1}</li>`
    } 
    html += `</ol>`
    document.querySelector(".lecciones").innerHTML=html

    //Mostrar el video y eso del curso en si
    document.querySelector(".Leccion-container").innerHTML=`
        <h1>${curso['nombre']} - ${curso['lecciones'][leccion]['titulo']}</h1>
    `
}