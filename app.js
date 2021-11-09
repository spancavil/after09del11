let formulario = document.getElementById("formulario");
let tabla = document.getElementById('tablaContent');

const datos = {
    name: "",
    lastname: "",
    id: ""
}

formulario.addEventListener("submit", (e)=>{
    console.log(e)
    e.preventDefault();
    datos.name = document.getElementById("fname").value
    console.log(datos);
})

tabla.children[0].innerHTML += (`
    <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    </tr>
`)
