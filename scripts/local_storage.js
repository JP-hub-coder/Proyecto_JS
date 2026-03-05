//Variables usuarios
let estudiantes = [
    {
        codigo: "001",
        identificacion: "100100001",
        nombres: "Juan",
        apellidos: "Augusto",
        Email: "juanaugusto@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/1.jpg",
        cursos: ["Fundamentos de Programación", "Razonamiento Lógico"]
    },
    {
        codigo: "002",
        identificacion: "100100002",
        nombres: "Carlos",
        apellidos: "Ramirez",
        Email: "carlosramirez@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/2.jpg",
        cursos: ["Programación Web", "Backend profesional"]
    },
    {
        codigo: "003",
        identificacion: "100100003",
        nombres: "Luis",
        apellidos: "Martinez",
        Email: "luismartinez@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/3.jpg",
        cursos: ["Fundamentos de Programación"]
    },
    {
        codigo: "004",
        identificacion: "100100004",
        nombres: "Andres",
        apellidos: "Gomez",
        Email: "andresgomez@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/4.jpg",
        cursos: ["Programación Web", "Ingles"]
    },
    {
        codigo: "005",
        identificacion: "100100005",
        nombres: "Diego",
        apellidos: "Torres",
        Email: "diegotorres@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/5.jpg",
        cursos: ["Backend profesional", "Inteligencia Artificial"]
    },
    {
        codigo: "006",
        identificacion: "100100006",
        nombres: "Miguel",
        apellidos: "Castro",
        Email: "miguelcastro@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/6.jpg",
        cursos: ["Fundamentos de Programación", "Programación Web", "Razonamiento Lógico"]
    },
    {
        codigo: "007",
        identificacion: "100100007",
        nombres: "Pedro",
        apellidos: "Vargas",
        Email: "pedrovargas@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/7.jpg",
        cursos: ["Inglés"]
    },
    {
        codigo: "008",
        identificacion: "100100008",
        nombres: "Santiago",
        apellidos: "Herrera",
        Email: "santiagoherrera@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/8.jpg",
        cursos: ["Programación Web", "Backend profesional", "Inglés"]
    },
    {
        codigo: "009",
        identificacion: "100100009",
        nombres: "Daniel",
        apellidos: "Morales",
        Email: "danielmorales@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/9.jpg",
        cursos: ["Inteligencia Artificial", "Razonamiento Lógico"]
    },
    {
        codigo: "010",
        identificacion: "100100010",
        nombres: "Sebastian",
        apellidos: "Rojas",
        Email: "sebastianrojas@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/10.jpg",
        cursos: ["Fundamentos de Programación", "Inglés"]
    }
    ];
if(localStorage.getItem("Estudiantes") == null){
    localStorage.setItem("Estudiantes", JSON.stringify(estudiantes))
}

let Docentes = [
    {
        codigo: "001",
        identificacion: "1001001001",
        nombres: "Marco",
        apellidos: "Aurelio",
        Email: "marco.aurelio@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/11.jpg",
        areaAcademica: "Informática"
    },
    {
        codigo: "002",
        identificacion: "1001001002",
        nombres: "Jonathan",
        apellidos: "Ramirez",
        Email: "jonathan.ramirez@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/12.jpg",
        areaAcademica: "Desarrollo Web"
    },
    {
        codigo: "003",
        identificacion: "1001001003",
        nombres: "Ortencia",
        apellidos: "Ramos",
        Email: "ortencia.ramos@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/women/13.jpg",
        areaAcademica: "Backend"
    },
    {
        codigo: "004",
        identificacion: "1001001004",
        nombres: "Roberto",
        apellidos: "Acuña",
        Email: "roberto.acuna@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/14.jpg",
        areaAcademica: "Inteligencia Artificial"
    },
    {
        codigo: "005",
        identificacion: "1001001005",
        nombres: "Mariana",
        apellidos: "Torres",
        Email: "mariana.torres@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/women/15.jpg",
        areaAcademica: "Lógica"
    },
    {
        codigo: "006",
        identificacion: "1001001006",
        nombres: "Daniel",
        apellidos: "Rodríguez",
        Email: "daniel.rodriguez@campus.edu",
        contraseña: "12345678",
        foto: "https://randomuser.me/api/portraits/men/16.jpg",
        areaAcademica: "Idiomas"
    }
];
if(localStorage.getItem("Docentes" == null)){
    localStorage.setItem("Docentes", JSON.stringify(Docentes));
}

let Administrativos = [
    {
        identificacion: "2002002001",
        nombres: "Laura",
        apellidos: "Gómez",
        Email: "laura.gomez@campus.edu",
        contraseña: "12345678",
        telefono: "3101234567",
        cargo: "Coordinadora Académica"
    },
    {
        identificacion: "2002002002",
        nombres: "Carlos",
        apellidos: "Martínez",
        Email: "carlos.martinez@campus.edu",
        contraseña: "12345678",
        telefono: "3102345678",
        cargo: "Asistente Administrativo"
    },
    {
        identificacion: "2002002003",
        nombres: "Ana",
        apellidos: "López",
        Email: "ana.lopez@campus.edu",
        contraseña: "12345678",
        telefono: "3103456789",
        cargo: "Encargada de Admisiones"
    }
];
if(localStorage.getItem("Administrativos")){
    localStorage.setItem("Administrativos", JSON.stringify(Administrativos));
}
//cursos
let cursos_storage = [
    {
        codigo: "001",
        nombre: "Fundamentos de Programación",
        profesor: "Marco Aurelio",
        estudiantesInscritos: 59,
        lecciones: [
            { titulo: "Lógica de programación", 
                horario: "6 a.m - 7 a.m",
                contenido: "Aprenderás a estructurar el pensamiento para resolver problemas mediante algoritmos y diagramas de flujo.",
                multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
            { titulo: "Estructura de datos", 
                horario: "7 a.m - 8 a.m",
                contenido: "Estudiarás las principales estructuras de datos como arreglos, listas, pilas y colas.",
                multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
            { titulo: "Pensamiento Computacional", 
                horario: "8 a.m - 9 a.m",
                contenido: "Desarrollarás habilidades para descomponer problemas complejos en partes más simples y manejables.",
                multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
            { titulo: "Programación orientada a objetos (POO)", 
                horario: "9 a.m - 10 a.m",
                contenido: "Aprenderás los pilares de la POO: encapsulamiento, herencia, polimorfismo y abstracción.",
                multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}}
        ]
    },
    {
        codigo: "002",
        nombre: "Programación Web",
        profesor: "Jonathan Ramirez",
        estudiantesInscritos: 47,
        lecciones: [
        { titulo: "HTML y CSS", 
            horario: "10 a.m - 11 a.m",
            contenido: "Aprenderás la estructura básica de una página web con HTML y cómo darle estilos con CSS.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "JavaScript", 
            horario: "11 a.m - 12 p.m",
            contenido: "Aprenderás los fundamentos de JavaScript, el lenguaje de programación del navegador.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Frameworks", 
            horario: "12 p.m - 1 p.m",
            contenido: "Explorarás los principales frameworks de JavaScript como React, Vue y Angular.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Consumo de APIs", 
            horario: "1 p.m - 2 p.m",
            contenido: "Aprenderás a conectar tu aplicación con servicios externos mediante APIs REST.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "CRUD (Create, Read, Update, Delete)", 
            horario: "2 p.m - 3 p.m",
            contenido: "Implementarás operaciones básicas de creación, lectura, actualización y eliminación de datos.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}}
        ]
    },
    {
        codigo: "003",
        nombre: "Backend Profesional",
        profesor: "Ortencia Ramos",
        estudiantesInscritos: 48,
        lecciones: [
        { titulo: "Node.js", 
            horario: "3 p.m - 4 p.m",
            contenido: "Aprenderás a crear servidores y aplicaciones del lado del servidor usando Node.js.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Creación de API REST", 
            horario: "4 p.m - 5 p.m",
            contenido: "Diseñarás y construirás APIs RESTful siguiendo buenas prácticas de desarrollo.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Manejo de seguridad web", 
            horario: "5 p.m - 6 p.m",
            contenido: "Estudiarás las principales vulnerabilidades web y cómo proteger tus aplicaciones.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}}
        ]   
    },
    {
        codigo: "004",
        nombre: "Inteligencia Artificial",
        profesor: "Roberto Acuña",
        estudiantesInscritos: 30,
        lecciones: [
        { titulo: "Fundamentos de IA", 
            horario: "3 p.m - 4 p.m",
            contenido: "Conocerás los conceptos básicos de la inteligencia artificial y su historia.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Machine Learning", 
            horario: "4 p.m - 5 p.m",
            contenido: "Aprenderás los algoritmos de aprendizaje automático y cómo entrenar modelos.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Procesamiento de datos", 
            horario: "5 p.m - 6 p.m",
            contenido: "Estudiarás técnicas para limpiar, transformar y analizar grandes volúmenes de datos.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Conexiones Neuronales", 
            horario: "6 p.m - 7 p.m",
            contenido: "Explorarás las redes neuronales artificiales y cómo imitan el cerebro humano.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}}
        ]
    },
    {
        codigo: "005",
        nombre: "Razonamiento Lógico",
        profesor: "Mariana Torres",
        estudiantesInscritos: 28,
        lecciones: [
        { titulo: "Principios básicos de lógica", 
            horario: "8 a.m - 9 a.m",
            contenido: "Aprenderás los fundamentos del razonamiento lógico y su aplicación en la vida cotidiana.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Conectores lógicos y proposiciones", 
            horario: "9 a.m - 10 a.m",
            contenido: "Estudiarás los conectores lógicos como conjunción, disyunción y negación.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Inferencias y argumentación", 
            horario: "10 a.m - 11 a.m",
            contenido: "Aprenderás a construir argumentos válidos y a identificar falacias lógicas.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Resolución de problemas lógicos", 
            horario: "11 a.m - 12 p.m",
            contenido: "Practicarás la resolución de problemas aplicando técnicas de razonamiento lógico.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}}
        ]
    },
    {
        codigo: "006",
        nombre: "Inglés",
        profesor: "Daniel Rodríguez",
        estudiantesInscritos: 32,
        lecciones: [
        { titulo: "Grammar Basics", 
            horario: "8 a.m - 9 a.m",
            contenido: "Estudiarás las reglas gramaticales fundamentales del idioma inglés.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Listening and Pronunciation", 
            horario: "9 a.m - 10 a.m",
            contenido: "Mejorarás tu comprensión auditiva y pronunciación mediante ejercicios prácticos.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Reading Comprehension", 
            horario: "10 a.m - 11 a.m",
            contenido: "Desarrollarás habilidades de lectura y comprensión de textos en inglés.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}},
        { titulo: "Conversational Practice", 
            horario: "11 a.m - 12 p.m",
            contenido: "Practicarás conversaciones cotidianas para ganar fluidez y confianza en el idioma.",
            multimedia: {tipo: "video", url: "https://youtu.be/NUgebKnHGKE?si=mcOyw0eVHSAv1DXC"}}
        ]
    }
];
if(localStorage.getItem("cursos_storage")){
    localStorage.setItem("cursos_storage", JSON.stringify(cursos_storage));
}
