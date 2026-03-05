const estudiante = [localStorage.getItem("User"), localStorage.getItem("Email")]
console.log(estudiante);
let users = JSON.parse(localStorage.getItem("Estudiantes"))
const cursos = JSON.parse(localStorage.getItem("cursos_storage"))

const btnCursos = document.getElementById("cursos");
const btnCursosTotal = document.getElementById("cursos-total")
const perfil = document.getElementById("perfil")

document.querySelector(".perfil").addEventListener("click", function(e) {
    e.stopPropagation();// evita que el click se propage al document
    const perfil_op = document.querySelector(".perfil_op");
    perfil_op.classList.remove("hidden")
});
document.addEventListener("click", function() { // al darle click por fuera del cuadro me vuelve y esconde el cuadro
    const perfil_op = document.querySelector(".perfil_op");
    perfil_op.classList.add("hidden")
});


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
    return null
}

btnCursos.addEventListener("click", ()=>{
    verificarFocus()
    btnCursos.classList+=" focus"
    document.querySelector(".cursos").classList = "cursos"
    document.querySelector(".cursos-container").innerHTML=""
    if(document.querySelector(".curso-leccion-container").classList.contains("hidden") == false){
        document.querySelector(".curso-leccion-container").classList += " hidden"
    }


    let data = getUserData();
    
    
    
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
    if(document.querySelector(".curso-leccion-container").classList.contains("hidden") == false){
        document.querySelector(".curso-leccion-container").classList += " hidden"
    }
    //console.log(document.querySelector(".cursos-container"))
    for(let i = 0; i< cursos.length; i++){
        //console.log("el curso "+cursos[i]['nombre']+" Esta en este estudiante")
        document.querySelector(".cursos-container").innerHTML+=`
            <div class="curso-card">
                <h3>${cursos[i]['nombre']}</h3>
                <button class="${cursos[i]['codigo']} button-curso" onClick="Inscribirse('${String(cursos[i]['codigo'])}')">Inscribirse</button>  
            </div>
        `
        
    }
})

function Inscribirse(codigo){
    let data = getUserData()
    let curso
    let index = 0
    for (let i = 0; i<cursos.length; i++){
        if(codigo === cursos[i]['codigo']){
            curso = cursos[i]
        }        
        
    }
    console.log(curso)
    if(data['cursos'].includes((curso['nombre']))){
        alert("Ya estas inscrito")
    }else{
        data['cursos'].push(curso['nombre'])
    }
    
    for(let i = 0; i<users.length; i++){
        if(users[i]['Email'] === data['Email']){
            index = i;
        }
    }
    users[index] = data
    localStorage.setItem('Estudiantes', JSON.stringify(users))

}

//Abrir curso
function AbrirCurso(curso){
    for (let index = 0; index < cursos.length; index++) {
        if(cursos[index]['codigo'] == curso){
            mostrarCurso(cursos[index])
        }
        
    }
}
let cursoActual;
function mostrarCurso(curso){
    let leccion = 0
    cursoActual = curso

    //Muestra la lista de lecciones
    document.querySelector(".lecciones").innerHTML=``
    
    let html = `<ol>`
    for(let i = 0; i<curso['lecciones'].length; i++){
        html += `<li onClick="imprimirCurso(${i})">Leccion ${i+1}</li>`
    } 
    html += `</ol>`
    document.querySelector(".lecciones").innerHTML=html
    
    imprimirCurso(leccion)
    
}

function imprimirCurso(leccion){
    //Borramos el html de cualquier cosa anterior
    document.querySelector(".cursos").classList += " hidden"
    document.querySelector(".cursos-container").innerHTML=""
    document.querySelector(".curso-leccion-container").classList = "curso-leccion-container"

    //Mostrar el video y eso del curso en si
    document.querySelector(".Leccion-container").innerHTML=`
        <h1 style="margin-bottom:30px;">${cursoActual['nombre']} - ${cursoActual['lecciones'][leccion]['titulo']}</h1>
        <video controls src="../media/Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster).mp4" type="mp4" style="width: 800px;"></video>
        <h2 style="margin-top:30px; color:black;">¿Que aprenderas con esta clase?</h2>
        <p>${cursoActual['lecciones'][leccion]['contenido']}</p>
        <h2 style="margin-top:30px; color:black;"> Materiales extra para la clase</h2>
        <h3>Video</h3>
        <a href="${cursoActual['lecciones'][leccion]['multimedia']['url']}" target="_black">Ir al video</a>
    `
}