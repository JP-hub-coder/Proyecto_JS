//localstorage2
let Usuarios = [
    {
        "Nombre":"Juan",
        "Email":"juan@gmail.com",
        "nacimiento":"2001-04-30",
        "contraseña":"12345678",
        "rol":"estudiante",
        "cursos":["Fundamentos de programacion", "Ingles", "Razonamiento Logico"]
    },
    {
        "Nombre":"Pepe",
        "Email":"Pepe@gmail.com",
        "nacimiento":"2002-12-3",
        "contraseña":"12345678",
        "rol":"estudiante",
        "cursos":["Programacion Web", "Backend Profecional", "IA", "Razonamiento Logico"]
    },
    {
        "Nombre":"Maria",
        "Email":"maria@gmail.com",
        "nacimiento":"1997-06-15",
        "contraseña":"12345678",
        "rol":"profesor"
    },
    {
        "Nombre":"Santiago",
        "Email":"santiago@gmail.com",
        "nacimiento":"1989-10-25",
        "contraseña":"12345678",
        "rol":"profesor"
    },
    {
        "Nombre":"Orlando",
        "Email":"orlando@gmail.com",
        "nacimiento":"1970-03-02",
        "contraseña":"12345678",
        "rol":"admin"
    }
]
let cursos = [
    {
        "Nombre": "Fundamentos de programacion",
        "Profesor":"Maria",
        "lecciones":"15",
        "Descripcion":"Aprende los conceptos basicos de la prorgamacion con este curso interactivo",
        "id":"Fund",
        "img":"../media/fundamentos.jpeg"
    },{
        "Nombre":"Ingles",
        "Profesor":"Santiago",
        "Lecciones":"84",
        "Descripcion":"Learn how to talk in English with our curse. ¡You will see results in Three months whit our certificated teachers!",
        "id":"Ing",
        "img":"../media/ingles.webp"

    },{
        "Nombre":"Razonamiento Logico",
        "Profesor":"Santiago",
        "Lecciones":"12",
        "Descripcion":"Aprende a pensar de manera computacional.",
        "id":"Raz",
        "img":"../media/razonamiento.webp"

    },{
        "Nombre":"Programacion Web",
        "Profesor":"Maria",
        "Lecciones":"45",
        "Descripcion":"Haz tu primera pagina web completamente funcional con este curso.",
        "id":"Web",
        "img":"../media/web.jpeg"

    },{
        "Nombre":"Backend Profecional",
        "Profesor":"Maria",
        "Lecciones":"70",
        "Descripcion":"Comprende el funcionamiento de las bases de datos y APIs y como obtener datos de ellas.",
        "id":"Back",
        "img":"../media/backend.png"

    },{
        "Nombre":"IA",
        "Profesor":"Santiago",
        "Lecciones":"40",
        "Descripcion":"Aprende sobre como generar una Inteligencia Artificial y los usos que le puedes dar.",
        "id":"IA",
        "img":"../media/IA.jpg"
        
    }
]

function setVariables(){
    if(localStorage.getItem("cursos") === null){
        localStorage.setItem("cursos", JSON.stringify(cursos))
    }
    if(localStorage.getItem("usuarios") === null){
        localStorage.setItem("usuarios", JSON.stringify(Usuarios))
    }
}
function Reiniciar(){
    localStorage.setItem("usuarios", JSON.stringify(Usuarios))
    localStorage.setItem("cursos", JSON.stringify(cursos))
}
function Reiniciar1(nombre, variable){
    localStorage.setItem(nombre, JSON.stringify(variable))

}
setVariables();
//Reiniciar() //Fuerza el reinicio de la base de datos. Solo usar en casos de emergencia. Enfasis en emergencia
//Reiniciar1("cursos", cursos);
//Reiniciar1("usuarios", Usuarios);
