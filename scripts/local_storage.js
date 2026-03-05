let Usuarios = [
    {
        "Nombre":"Juan",
        "Email":"juan@gmail.com",
        "nacimiento":"2001-04-30",
        "contraseña":"12345678",
        "rol":"estudiante"
    },
    {
        "Nombre":"Pepe",
        "Email":"Pepe@gmail.com",
        "nacimiento":"2002-12-3",
        "contraseña":"12345678",
        "rol":"estudiante"
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
localStorage.setItem("usuarios", JSON.stringify(Usuarios))

let Docentes = [
    {
        codigo: "001",
        identificacion: "1001001001",
        nombres: "Marco",
        apellidos: "Aurelio",
        email: "marco.aurelio@campus.edu",
        foto: "https://randomuser.me/api/portraits/men/11.jpg",
        areaAcademica: "Informática"
    },
    {
        codigo: "002",
        identificacion: "1001001002",
        nombres: "Jonathan",
        apellidos: "Ramirez",
        email: "jonathan.ramirez@campus.edu",
        foto: "https://randomuser.me/api/portraits/men/12.jpg",
        areaAcademica: "Desarrollo Web"
    },
    {
        codigo: "003",
        identificacion: "1001001003",
        nombres: "Ortencia",
        apellidos: "Ramos",
        email: "ortencia.ramos@campus.edu",
        foto: "https://randomuser.me/api/portraits/women/13.jpg",
        areaAcademica: "Backend"
    },
    {
        codigo: "004",
        identificacion: "1001001004",
        nombres: "Roberto",
        apellidos: "Acuña",
        email: "roberto.acuna@campus.edu",
        foto: "https://randomuser.me/api/portraits/men/14.jpg",
        areaAcademica: "Inteligencia Artificial"
    },
    {
        codigo: "005",
        identificacion: "1001001005",
        nombres: "Mariana",
        apellidos: "Torres",
        email: "mariana.torres@campus.edu",
        foto: "https://randomuser.me/api/portraits/women/15.jpg",
        areaAcademica: "Lógica"
    },
    {
        codigo: "006",
        identificacion: "1001001006",
        nombres: "Daniel",
        apellidos: "Rodríguez",
        email: "daniel.rodriguez@campus.edu",
        foto: "https://randomuser.me/api/portraits/men/16.jpg",
        areaAcademica: "Idiomas"
    }
];
localStorage.setItem("Docentes", JSON.stringify(Docentes));

let Administrativos = [
    {
        identificacion: "2002002001",
        nombres: "Laura",
        apellidos: "Gómez",
        email: "laura.gomez@campus.edu",
        telefono: "3101234567",
        cargo: "Coordinadora Académica"
    },
    {
        identificacion: "2002002002",
        nombres: "Carlos",
        apellidos: "Martínez",
        email: "carlos.martinez@campus.edu",
        telefono: "3102345678",
        cargo: "Asistente Administrativo"
    },
    {
        identificacion: "2002002003",
        nombres: "Ana",
        apellidos: "López",
        email: "ana.lopez@campus.edu",
        telefono: "3103456789",
        cargo: "Encargada de Admisiones"
    }
];
localStorage.setItem("Administrativos", JSON.stringify(Administrativos));

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
localStorage.setItem("cursos_storage", JSON.stringify(cursos_storage));
