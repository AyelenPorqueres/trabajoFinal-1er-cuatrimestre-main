//Se añade un evento de escucha al botoninputs y se crea una funcion anonima
document.getElementById("botoninputs").addEventListener("click", () => {
    //Asignamos la constantes a los id obtenidos
    const tarea = document.getElementById("input")

    
    const contenedor = document.getElementsByClassName("contenedorlista2")[0]


    // Con html creamos el contenedor de las tareas 
    plantillaTarea =
        ` <div class="contenedortareas1" >

       
       <input type= "checkbox" id="checkbox1" class="casillaverificacion listatarea"  onchange="cambiarColorLi(this) " onclick="agregarAtributoCheck(event)"> 
      
       <label class="tareas">${tarea.value}  </label>
       
       <button class="botoneliminar botoneliminartareacont" onclick="eliminarTarea(event)" ><i class="fa-solid fa-trash-can" style="color: #ea1010;"></i></button>
    </div>`
      
    //preguntamos si el campo de tarea esta vacio, en caso de que si se muestra el error en pantalla
    if (tarea.value == "") {
        document.getElementById("error-tareavacia").innerHTML = "Se debe ingresar una tarea";

    } else {
        contenedor.innerHTML += plantillaTarea
        document.getElementById("error-tareavacia").innerHTML = "";
        tarea.value = "";
    }




})

//Añadimos una funcion para eliminar tareas a traves del icono de basura
function eliminarTarea(event) {
    let botoneliminar = event.target;
    botoneliminar.parentElement.parentElement.remove();
}

//Funcion para cambiar el fondo del color de la tarea al ser marcada como finalizada
function cambiarColorLi(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.style.backgroundColor = ' rgb(88, 165, 88)'; // Cambiar a color verde cuando está marcada
    } else {
        li.style.backgroundColor = 'white'; // Color por defecto si no se marca la tarea
    }
}

//Funcion anonima para verificar si la tarea tiene el atributo checked, de ser asi la agrega, si no la elimina.
const agregarAtributoCheck = (event) => {
    const checkbox = event.target;
    if (checkbox.hasAttribute("checked") == false) {
        checkbox.setAttribute("checked", "true");
    } else {
        checkbox.removeAttribute("checked");
    }
}












