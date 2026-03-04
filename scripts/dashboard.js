// MIRAR CURSOS Y ENTRAR A SU INFORMACIÓN

const fundamentos_curso = document.getElementById("ver_fundProg");
const progr_web = document.getElementById("ver_progWeb");
const backend = document.getElementById("ver_backend");
const IA = document.getElementById("ver_IA");
const razonamiento = document.getElementById("ver_razonamiento");
const ingles = document.getElementById("ver_ingles");
const cursos = document.querySelector(".cursos");


fundamentos_curso.addEventListener("click", function() {
    const cursoFundamentos = document.querySelector(".fund-programación");

    cursos.classList.add("hidden");
    cursoFundamentos.classList.remove("hidden");

});

progr_web.addEventListener("click", function() {
    const cursoProgWeb = document.querySelector(".prog-web");

    cursos.classList.add("hidden");
    cursoProgWeb.classList.remove("hidden");

});

backend.addEventListener("click", function() {
    const cursoBackend = document.querySelector(".backend");

    cursos.classList.add("hidden");
    cursoBackend.classList.remove("hidden");

});

IA.addEventListener("click", function() {
    const cursoIA = document.querySelector(".IA");

    cursos.classList.add("hidden");
    cursoIA.classList.remove("hidden");

});

razonamiento.addEventListener("click", function() {
    const cursoRazonamiento = document.querySelector(".razonamiento");

    cursos.classList.add("hidden");
    cursoRazonamiento.classList.remove("hidden");

});

ingles.addEventListener("click", function() {
    const cursoIngles = document.querySelector(".ingles");

    cursos.classList.add("hidden");
    cursoIngles.classList.remove("hidden");

});

