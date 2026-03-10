const cursos = JSON.parse(localStorage.getItem("cursos_storage"))
for(let i = 0; i<cursos.length; i++){
    let curso = cursos[i]
    console.log();
    document.querySelector("body").innerHTML +=`
    <h1>${cursos[i].nombre}</h1>`
    for(let i = 0; i<curso.Modulos.length; i++){
        console.log(curso)
        document.querySelector("body").innerHTML +=`
        
        <table>
            <tr><td>Modulo ${i+1}</td></tr>
            <tr>
                <td>Lecciones: ${curso.Modulos[i][i+1].length}</td>
            </tr>
            <tr>
                <td>Intensidad Horaria: ${curso.Modulos[i][i+1].length}0 horas</td>
            </tr>
        </table>
    `
    }
}