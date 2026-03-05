const fundamentos_curso = document.getElementById("ver_fundProg");
const progr_web = document.getElementById("ver_progWeb");
const backend = document.getElementById("ver_backend");
const IA = document.getElementById("ver_IA");
const razonamiento = document.getElementById("ver_razonamiento");
const ingles = document.getElementById("ver_ingles");
const volver_cursos = document.querySelectorAll(".volver-curso__btn");
const curso_individual = document.querySelectorAll(".curso");
const cursos = document.querySelector(".cursos");
const docentes = document.querySelector(".docentes");
const administrativos = document.querySelector(".administrativos");
const docentes_btn = document.getElementById("docentes");
const cursos_btn = document.getElementById("cursos");
const administrativos_btn = document.getElementById("administrativos");
const btns = document.querySelectorAll(".pages-button");
const eliminarcurso_btn = document.querySelectorAll(".eliminar-curso__btn");
let docentesContainer = document.querySelector(".docentes-container");
let administrativosContainer = document.querySelector(".administrativos-container");
const añadir_administrativo = document.querySelector(".añadir_administrativo");
const añadirContainer = document.querySelector(".añadir-container");
const añadir_docente = document.querySelector(".añadir_docente");
const añadirDocenteContainer = document.querySelector(".añadir-docente-container")
const profile = document.querySelector(".profile")
const perfil = document.querySelector(".perfil")
const cerrar_sesion = document.querySelector(".cerrar_sesion")

//imagen para cerrar sesión o ver el perfil
profile.addEventListener("click", function(e) {
    e.stopPropagation();// evita que el click se propage al document
    const perfil_op = document.querySelector(".perfil_op");
    perfil_op.classList.remove("hidden")
});

document.addEventListener("click", function() { // al darle click por fuera del cuadro me vuelve y esconde el cuadro
        const perfil_op = document.querySelector(".perfil_op");
        perfil_op.classList.add("hidden")
});

cerrar_sesion.addEventListener("click", function() {
    window.location.replace("../index.html")
});


// MIRAR CURSOS Y ENTRAR A SU INFORMACIÓN

//volver al inicio
function volverAlInicio() {
    document.querySelectorAll(".curso").forEach(section => section.classList.add("hidden"));
    cursos.classList.remove("hidden");
}

//como su nombre lo dice, ocultar todo
function ocultarTodo() {
    document.querySelector(".cursos").classList.add("hidden");
    document.querySelector(".docentes").classList.add("hidden");
    document.querySelector(".administrativos").classList.add("hidden");
    document.querySelectorAll(".curso").forEach(s => s.classList.add("hidden"));
}

//eliminar cursos
function eliminarCurso(codigo, btnDashboard, seccionCurso) {
    let data = JSON.parse(localStorage.getItem("cursos_storage"));
    data = data.filter(curso => curso.codigo !== codigo);
    localStorage.setItem("cursos_storage", JSON.stringify(data));

    btnDashboard.classList.add("hidden");
    seccionCurso.classList.add("hidden");
    cursos.classList.remove("hidden");
}

//viajar entre cursos
fundamentos_curso.addEventListener("click", function() {
    const cursoData = JSON.parse(localStorage.getItem("cursos_storage")).find(c => c.codigo === "001");
    const cursoFundamentos = document.querySelector(".fund-programacion");

    ocultarTodo()
    cursoFundamentos.classList.remove("hidden");

    let leccionesHTML = "";
    for (let leccion of cursoData.lecciones) {
        leccionesHTML += ` 
            <div class="leccion-card">
                <h4>${leccion.titulo}</h4>
                <p><strong>Horario:</strong> ${leccion.horario}</p>
                <p><strong>Contenido:</strong> ${leccion.contenido}</p>
                <p><strong>Multimedia:</strong> 
                    <a href="${leccion.multimedia.url}" target="_blank">${leccion.multimedia.tipo}</a>
                </p> <br><br>
            </div>
        `;
    }

    cursoFundamentos.innerHTML = `
        <div>
            <h2>#${cursoData.codigo}</h2>
            <h2>${cursoData.nombre}</h2><br>
            <h4>Profesor designado: ${cursoData.profesor}</h4>
            <p>Cantidad de estudiantes inscritos: ${cursoData.estudiantesInscritos}</p>
            <br>Lecciones del curso:<br><br>
            ${leccionesHTML}
        </div>
        <button class="btn eliminar-curso__btn">Eliminar el curso</button>
        <button class="btn volver-curso__btn">Volver al inicio</button>
    `;

    cursoFundamentos.querySelector(".volver-curso__btn").addEventListener("click", volverAlInicio);
    cursoFundamentos.querySelector(".eliminar-curso__btn").addEventListener("click", function() {
        eliminarCurso("001", fundamentos_curso, cursoFundamentos);
    });
});

progr_web.addEventListener("click", function() {
    const cursoData = JSON.parse(localStorage.getItem("cursos_storage")).find(c => c.codigo === "002");
    const cursoProgWeb = document.querySelector(".prog-web");

    console.log(cursoData.lecciones)

    ocultarTodo();
    cursoProgWeb.classList.remove("hidden");

    let leccionesHTML = "";
    for (let leccion of cursoData.lecciones) {
        leccionesHTML += ` 
            <div class="leccion-card">
                <h4>${leccion.titulo}</h4>
                <p><strong>Horario:</strong> ${leccion.horario}</p>
                <p><strong>Contenido:</strong> ${leccion.contenido}</p>
                <p><strong>Multimedia:</strong> 
                    <a href="${leccion.multimedia.url}" target="_blank">${leccion.multimedia.tipo}</a>
                </p> <br><br>
            </div>
        `;
    }
    

    cursoProgWeb.innerHTML = `
        <div>
            <h2>#${cursoData.codigo}</h2>
            <h2>${cursoData.nombre}</h2><br>
            <h4>Profesor designado: ${cursoData.profesor}</h4>
            <p>Cantidad de estudiantes inscritos: ${cursoData.estudiantesInscritos}</p>
            <br>Lecciones del curso:<br><br>
            ${leccionesHTML}
        </div>
        <button class="eliminar-curso__btn">Eliminar el curso</button>
        <button class="volver-curso__btn">Volver al inicio</button>
    `;
    cursoProgWeb.querySelector(".volver-curso__btn").addEventListener("click", volverAlInicio);
    cursoProgWeb.querySelector(".eliminar-curso__btn").addEventListener("click", function() {
        eliminarCurso("002", progr_web, cursoProgWeb);
    });
});

//curso backend
backend.addEventListener("click", function() {
    const cursoData = JSON.parse(localStorage.getItem("cursos_storage")).find(c => c.codigo === "003");
    const cursoBackend = document.querySelector(".back-prof");

    cursoBackend.classList.remove("hidden");

    ocultarTodo();
    cursoBackend.classList.remove("hidden");

    let leccionesHTML = "";
    for (let leccion of cursoData.lecciones) {
        leccionesHTML += ` 
            <div class="leccion-card">
                <h4>${leccion.titulo}</h4>
                <p><strong>Horario:</strong> ${leccion.horario}</p>
                <p><strong>Contenido:</strong> ${leccion.contenido}</p>
                <p><strong>Multimedia:</strong> 
                    <a href="${leccion.multimedia.url}" target="_blank">${leccion.multimedia.tipo}</a>
                </p> <br><br>
            </div>
        `;
    }
    
    cursoBackend.innerHTML = `
        <div>
            <h2>#${cursoData.codigo}</h2>
            <h2>${cursoData.nombre}</h2><br>
            <h4>Profesor designado: ${cursoData.profesor}</h4>
            <p>Cantidad de estudiantes inscritos: ${cursoData.estudiantesInscritos}</p>
            <br>Lecciones del curso:<br><br>
            ${leccionesHTML}
        </div>
        <button class="eliminar-curso__btn">Eliminar el curso</button>
        <button class="volver-curso__btn">Volver al inicio</button>
    `;
    cursoBackend.querySelector(".volver-curso__btn").addEventListener("click", volverAlInicio);
    cursoBackend.querySelector(".eliminar-curso__btn").addEventListener("click", function() {
        eliminarCurso("003", backend, cursoBackend);
    });
});


//curso IA
IA.addEventListener("click", function() {
    const cursoData = JSON.parse(localStorage.getItem("cursos_storage")).find(c => c.codigo === "004");
    const cursoIA = document.querySelector(".IA");

    ocultarTodo();
    cursoIA.classList.remove("hidden");

    let leccionesHTML = "";
    for (let leccion of cursoData.lecciones) {
        leccionesHTML += ` 
            <div class="leccion-card">
                <h4>${leccion.titulo}</h4>
                <p><strong>Horario:</strong> ${leccion.horario}</p>
                <p><strong>Contenido:</strong> ${leccion.contenido}</p>
                <p><strong>Multimedia:</strong> 
                    <a href="${leccion.multimedia.url}" target="_blank">${leccion.multimedia.tipo}</a>
                </p> <br><br>
            </div>
        `;
    }

    cursoIA.innerHTML = `
        <div>
            <h2>#${cursoData.codigo}</h2>
            <h2>${cursoData.nombre}</h2><br>
            <h4>Profesor designado: ${cursoData.profesor}</h4>
            <p>Cantidad de estudiantes inscritos: ${cursoData.estudiantesInscritos}</p>
            <br>Lecciones del curso:<br><br>
            ${leccionesHTML}
        </div>
        <button class="eliminar-curso__btn">Eliminar el curso</button>
        <button class="volver-curso__btn">Volver al inicio</button>
    `;
    cursoIA.querySelector(".volver-curso__btn").addEventListener("click", volverAlInicio);
    cursoIA.querySelector(".eliminar-curso__btn").addEventListener("click", function() {
        eliminarCurso("004", IA, cursoIA);
    });
});


//curso razonamiento
razonamiento.addEventListener("click", function() {
    const cursoData = JSON.parse(localStorage.getItem("cursos_storage")).find(c => c.codigo === "005");
    const cursoRazonamiento = document.querySelector(".razonamiento");

    ocultarTodo();
    cursoRazonamiento.classList.remove("hidden");

    let leccionesHTML = "";
    for (let leccion of cursoData.lecciones) {
        leccionesHTML += ` 
            <div class="leccion-card">
                <h4>${leccion.titulo}</h4>
                <p><strong>Horario:</strong> ${leccion.horario}</p>
                <p><strong>Contenido:</strong> ${leccion.contenido}</p>
                <p><strong>Multimedia:</strong> 
                    <a href="${leccion.multimedia.url}" target="_blank">${leccion.multimedia.tipo}</a>
                </p> <br><br>
            </div>
        `;
    }

    cursoRazonamiento.innerHTML = `
        <div>
            <h2>#${cursoData.codigo}</h2>
            <h2>${cursoData.nombre}</h2><br>
            <h4>Profesor designado: ${cursoData.profesor}</h4>
            <p>Cantidad de estudiantes inscritos: ${cursoData.estudiantesInscritos}</p>
            <br>Lecciones del curso:<br><br>
            ${leccionesHTML}
        </div>
        <button class="eliminar-curso__btn">Eliminar el curso</button>
        <button class="volver-curso__btn">Volver al inicio</button>
    `;
    cursoRazonamiento.querySelector(".volver-curso__btn").addEventListener("click", volverAlInicio);
    cursoRazonamiento.querySelector(".eliminar-curso__btn").addEventListener("click", function() {
        eliminarCurso("005", razonamiento, cursoRazonamiento);
    });
});


//curso ingles
ingles.addEventListener("click", function() {
    const cursoData = JSON.parse(localStorage.getItem("cursos_storage")).find(c => c.codigo === "006");
    const cursoIngles = document.querySelector(".ingles");

    ocultarTodo();
    cursoIngles.classList.remove("hidden");

    let leccionesHTML = "";
    for (let leccion of cursoData.lecciones) {
        leccionesHTML += ` 
            <div class="leccion-card">
                <h4>${leccion.titulo}</h4>
                <p><strong>Horario:</strong> ${leccion.horario}</p>
                <p><strong>Contenido:</strong> ${leccion.contenido}</p>
                <p><strong>Multimedia:</strong> 
                    <a href="${leccion.multimedia.url}" target="_blank">${leccion.multimedia.tipo}</a>
                </p> <br><br>
            </div>
        `;
    }  

    cursoIngles.innerHTML = `
        <div>
            <h2>#${cursoData.codigo}</h2>
            <h2>${cursoData.nombre}</h2><br>
            <h4>Profesor designado: ${cursoData.profesor}</h4>
            <p>Cantidad de estudiantes inscritos: ${cursoData.estudiantesInscritos}</p>
            <br>Lecciones del curso:<br><br>
            ${leccionesHTML}
        </div>
        <button class="eliminar-curso__btn">Eliminar el curso</button>
        <button class="volver-curso__btn">Volver al inicio</button>
    `;
    cursoIngles.querySelector(".volver-curso__btn").addEventListener("click", volverAlInicio);
    cursoIngles.querySelector(".eliminar-curso__btn").addEventListener("click", function() {
        eliminarCurso("006", ingles, cursoIngles);
    });
});

// CONTROL DE MOVIMIENTOS ENTRE "PAGINAS" USANDO LA CLASE "HIDDEN" PARA MOSTRAR U OCULTAR SECCIONES

cursos_btn.addEventListener("click", function() {

    cursos.classList.remove("hidden");
    docentes.classList.add("hidden");
    administrativos.classList.add("hidden");

    btns.forEach(btn => btn.classList.remove("pages-button--active"));
    cursos_btn.classList.add("pages-button--active");

});


//mostrar docentes del localStorage
docentes_btn.addEventListener("click", function() {
    const docentesSection = document.querySelector(".docentes");

    cursos.classList.add("hidden");
    administrativos.classList.add("hidden");

    curso_individual.forEach(section => section.classList.add("hidden"));
    docentesSection.classList.remove("hidden");

    btns.forEach(btn => btn.classList.remove("pages-button--active"));
    docentes_btn.classList.add("pages-button--active");


    let docentes_storage = JSON.parse(localStorage.getItem("Docentes"));
    docentesContainer.classList.remove("hidden")
    docentesContainer.innerHTML = "";

    docentes_storage.forEach(docente => {
        let docenteCard = document.createElement("div");
        docenteCard.classList.add("docente-card");

        docenteCard.innerHTML = `
            <img src="${docente.foto}" class="docente-foto">
            <h3>${docente.nombres} ${docente.apellidos}</h3>
            <p><strong>Identificación:</strong> ${docente.identificacion}</p>
            <p><strong>Email:</strong> ${docente.Email}</p>
            <p><strong>Área Académica:</strong> ${docente.areaAcademica}</p>
            <button class="btn eliminar-docente__btn">Eliminar Docente</button>
            <button class="btn editar-docente__btn">Editar Docente</button>
        `;

        //boton de eliminar
        docenteCard.querySelector(".eliminar-docente__btn").addEventListener("click", function() {
        // Guardar el nombre del docente ANTES de eliminarlo
        const nombreDocente = `${docente.nombres} ${docente.apellidos}`;

        // Eliminar el docente del localStorage
        let data = JSON.parse(localStorage.getItem("Docentes"));
        data = data.filter(d => d.codigo !== docente.codigo);
        localStorage.setItem("Docentes", JSON.stringify(data));

        // Actualizar los cursos que tenían a este docente
        let cursos = JSON.parse(localStorage.getItem("cursos_storage"));
        cursos = cursos.map(curso => {
            if (curso.profesor === nombreDocente) {
                curso.profesor = "Sin asignar";
            }
            return curso;
        });
        localStorage.setItem("cursos_storage", JSON.stringify(cursos));

        // Eliminar la card del DOM
        docenteCard.remove();
        });


        //boton de editar
        docenteCard.querySelector(".editar-docente__btn").addEventListener("click", function() {
            document.getElementById("codigo-docente").value = docente.codigo;
            document.getElementById("identificacion-docente").value = docente.identificacion;
            document.getElementById("nombres-docente").value = docente.nombres;
            document.getElementById("apellidos-docente").value = docente.apellidos;
            document.getElementById("email-docente").value = docente.Email;
            document.getElementById("foto-docente").value = docente.foto;
            document.getElementById("area-docente").value = docente.areaAcademica;

            añadirDocenteContainer.classList.remove("hidden")
            
            const btnGuardar = document.querySelector(".btn-guardar-docente")
            const btnClone = btnGuardar.cloneNode(true);
            btnGuardar.parentNode.replaceChild(btnClone, btnGuardar)
            

        //actualizar en vez de solo agregar
        btnClone.onclick = function() {
            let data = JSON.parse(localStorage.getItem("Docentes"));
            const index = data.findIndex(d => d.codigo === docente.codigo);

            data[index] = {
                codigo: document.getElementById("codigo-docente").value,
                identificacion: document.getElementById("identificacion-docente").value,
                nombres: document.getElementById("nombres-docente").value,
                apellidos: document.getElementById("apellidos-docente").value,
                email: document.getElementById("email-docente").value,
                foto: document.getElementById("foto-docente").value,
                areaAcademica: document.getElementById("area-docente").value
            };

            localStorage.setItem("Docentes", JSON.stringify(data));
            añadirDocenteContainer.classList.add("hidden");
            docentes_btn.click();
        };
        })
        docentesContainer.append(docenteCard);
    });
});


//añadir docente
añadir_docente.addEventListener("click", function() {

    //limpiar los inputs
    document.getElementById("codigo-docente").value = "";
    document.getElementById("identificacion-docente").value = "";
    document.getElementById("nombres-docente").value = ""
    document.getElementById("apellidos-docente").value = "";
    document.getElementById("email-docente").value = "";
    document.getElementById("foto-docente").value = "";
    document.getElementById("area-docente").value = "";

    añadirDocenteContainer.classList.remove("hidden")

    //reasignar el comportamiento de agregar y no de editar
    const btnGuardar = document.querySelector(".btn-guardar-docente");
    const btnClone = btnGuardar.cloneNode(true);
    btnGuardar.parentNode.replaceChild(btnClone, btnGuardar);

    document.querySelector(".btn-guardar-docente").addEventListener("click", function() {


        const codigo = document.getElementById("codigo-docente").value;
        const identificacion = document.getElementById("identificacion-docente").value;
        const nombres = document.getElementById("nombres-docente").value;
        const apellidos = document.getElementById("apellidos-docente").value;
        const email = document.getElementById("email-docente").value;
        const foto = document.getElementById("foto-docente").value;
        const areaAcademica = document.getElementById("area-docente").value;
    
        if (!codigo || !identificacion || !nombres || !apellidos || !email || !foto || !areaAcademica) {
            alert("Por favor rellena todos los campos");
            return;
        }
    
        let data = JSON.parse(localStorage.getItem("Docentes"));
        data.push({ codigo, identificacion, nombres, apellidos, email, foto, areaAcademica });
        localStorage.setItem("Docentes", JSON.stringify(data));
    
        añadirDocenteContainer.classList.add("hidden");
        docentes_btn.click();
    });
});

document.querySelector(".btn-cancelar-docente").addEventListener("click", function() {
    añadirDocenteContainer.classList.add("hidden")
});

//mostrar administrativos del localStorage
administrativos_btn.addEventListener("click", function() {

    cursos.classList.add("hidden");
    docentes.classList.add("hidden");
    curso_individual.forEach(section => section.classList.add("hidden"));
    administrativos.classList.remove("hidden");

    btns.forEach(btn => btn.classList.remove("pages-button--active"));
    administrativos_btn.classList.add("pages-button--active");

    let administrativos_storage = JSON.parse(localStorage.getItem("Administrativos"));
    administrativosContainer.classList.remove("hidden")

    administrativosContainer.innerHTML = "";

    administrativos_storage.forEach(admin => {
        let adminCard = document.createElement("div");
        adminCard.classList.add("administrativo-card");

        adminCard.innerHTML = `
            <h3>${admin.nombres} ${admin.apellidos}</h3>
            <p><strong>Identificación:</strong> ${admin.identificacion}</p>
            <p><strong>Email:</strong> ${admin.email}</p>
            <p><strong>Teléfono:</strong> ${admin.telefono}</p>
            <button class="btn eliminar-administrativo__btn">Eliminar Administrativo</button>
            <button class="btn editar-administrativo__btn">Editar Administrativo</button>
        `;

        //boton de eliminar
        adminCard.querySelector(".eliminar-administrativo__btn").addEventListener("click", function() {
            let data = JSON.parse(localStorage.getItem("Administrativos"));
            data = data.filter(a => a.identificacion !== admin.identificacion);
            localStorage.setItem("Administrativos", JSON.stringify(data));
            adminCard.remove();
        });

        //editar administrativo
        adminCard.querySelector(".editar-administrativo__btn").addEventListener("click", function() {
        document.getElementById("nombres").value = admin.nombres;
        document.getElementById("apellidos").value = admin.apellidos;
        document.getElementById("identificacion").value = admin.identificacion;
        document.getElementById("email").value = admin.email;
        document.getElementById("telefono").value = admin.telefono;
        document.getElementById("cargo").value = admin.cargo;

        añadirContainer.classList.remove("hidden");

        document.querySelector(".btn-guardar").onclick = function() {
            let data = JSON.parse(localStorage.getItem("Administrativos"));
            const index = data.findIndex(a => a.identificacion === admin.identificacion);

            data[index] = {
                nombres: document.getElementById("nombres").value,
                apellidos: document.getElementById("apellidos").value,
                identificacion: document.getElementById("identificacion").value,
                email: document.getElementById("email").value,
                telefono: document.getElementById("telefono").value,
                cargo: document.getElementById("cargo").value
            };

            localStorage.setItem("Administrativos", JSON.stringify(data));
            añadirContainer.classList.add("hidden");
            administrativos_btn.click();
        };
        });

        administrativosContainer.append(adminCard);
    });
});

//añadir daministrativo
añadir_administrativo.addEventListener("click", function() {
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("identificacion").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("cargo").value = "";

    añadirContainer.classList.remove("hidden");

    document.querySelector(".btn-guardar").onclick = function() {
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const identificacion = document.getElementById("identificacion").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const cargo = document.getElementById("cargo").value;

        if (!nombres || !apellidos || !identificacion || !email || !telefono || !cargo) {
            alert("Por favor rellena todos los campos");
            return;
        }

        let data = JSON.parse(localStorage.getItem("Administrativos"));
        data.push({ nombres, apellidos, identificacion, email, telefono, cargo });
        localStorage.setItem("Administrativos", JSON.stringify(data));

        añadirContainer.classList.add("hidden");
        administrativos_btn.click();
    };
});

//por si se quiere salir solo cancelar
document.querySelector(".btn-cancelar").addEventListener("click", function() {
    añadirContainer.classList.add("hidden");
});

//mostrar el perfil después de darle a la foto
document.querySelector(".perfil").addEventListener("click", function() {
    const Administrativos_perfil = JSON.parse(localStorage.getItem("Administrativos"));
    const admon = Administrativos_perfil[0]; //se cambia el índice según el usuario logueado

    document.getElementById("perfil-nombres").textContent = admon.nombres;
    document.getElementById("perfil-apellidos").textContent = admon.apellidos;
    document.getElementById("perfil-email").textContent = admon.Email;
    document.getElementById("perfil-cargo").textContent = admon.cargo;

    document.querySelector(".perfil-completo").classList.remove("hidden");
    document.querySelector(".sobreponer").classList.remove("hidden");
});

document.querySelector(".cerrar-perfil").addEventListener("click", cerrarPerfil);
document.querySelector(".sobreponer").addEventListener("click", cerrarPerfil);

function cerrarPerfil() {
    document.querySelector(".perfil-completo").classList.add("hidden");
    document.querySelector(".sobreponer").classList.add("hidden");
}
