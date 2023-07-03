// Buscamos en el html los id y les asignamos una constante
const botonenviarCuenta = document.getElementById ("boton-enviar-cuenta")
const micuenta = document.getElementById("mi-cuenta")
const nombreCuenta = document.getElementById ("nombres-cuenta")
const apellidoCuenta = document.getElementById ("apellidos-cuenta")
const usuarioCuenta= document.getElementById ("usuario-cuenta")
const contraseniaCuenta = document.getElementById ("contrasenia-cuenta")
const emailCuenta = document.getElementById ("correo-cuenta")

//Realizamos las funciones para validar los campos del formulario de registro

function campoNombreCuenta(){
    const valorNombreCuenta = nombreCuenta.value.trim() ;
    if(valorNombreCuenta == ""){
        document.getElementById("error-nombre-cuenta").innerHTML = "El campo nombre es obligatorio";
        nombreCuenta.classList.add('is-invalid');
   
    }else{
        document.getElementById ("error-nombre-cuenta").innerHTML = "";
        nombreCuenta.classList.remove('is-invalid');
    }
}

function campoApellidoCuenta(){
    const valorApellidoCuenta = apellidoCuenta.value.trim() ;
    if(valorApellidoCuenta == ""){
        document.getElementById("error-apellido-cuenta").innerHTML = "El campo apellido es obligatorio";
        apellidoCuenta.classList.add('is-invalid');
    }else{
        document.getElementById ("error-apellido-cuenta").innerHTML = "";
        apellidoCuenta.classList.remove('is-invalid');
    }
}

function campoUsuarioCuenta(){
    const valorUsuarioCuenta = usuarioCuenta.value.trim();
    if(valorUsuarioCuenta == ""){
        document.getElementById ("error-usuario-cuenta").innerHTML = "El campo usuario es obligatorio";
        usuarioCuenta.classList.add('is-invalid');


    }else if (valorUsuarioCuenta.length < 5){
        document.getElementById ("error-usuario-cuenta").innerHTML = "Solo debe ingresar un usuario de 5 caracteres";
        usuarioCuenta.classList.add('is-invalid');


    }else{
        document.getElementById ("error-usuario-cuenta").innerHTML = "";
        usuarioCuenta.classList.remove('is-invalid');
    }

}

function campoEmailCuenta(){
    const valorEmailCuenta = emailCuenta.value.trim();
    if(valorEmailCuenta == ""){
        document.getElementById("error-email-cuenta").innerHTML = "El campo email es obligatorio";
        emailCuenta.classList.add('is-invalid');
    }else{
        document.getElementById ("error-email-cuenta").innerHTML = "";
        emailCuenta.classList.remove('is-invalid');
    }
}

function campoContraseniaCuenta(){
    const valorContraseniaCuenta = contraseniaCuenta.value;
    if(valorContraseniaCuenta == ""){
        document.getElementById ("error-contrasenia-cuenta").innerHTML = "El campo contraseña es obligatorio";
        contraseniaCuenta.classList.add('is-invalid');

    }else if (valorContraseniaCuenta.length < 6 ){
        document.getElementById ("error-contrasenia-cuenta").innerHTML = "El campo contraseña debe tener más de 6 caracteres";
        contraseniaCuenta.classList.add('is-invalid');
        
    }else{
        document.getElementById ("error-contrasenia-cuenta").innerHTML = "";
        contraseniaCuenta.classList.remove('is-invalid');
    }
}
//Se agregan los eventos de escucha a micuentay botonenviarCuenta y se llama a las funciones.
micuenta.addEventListener ("click", validarFormularioCuenta);

botonenviarCuenta.addEventListener ("click", resetearFormularioCuenta);

//Se realiza la funcion para validar el formulario de registro
//Se añade el prevent default para que no se recargue la pagina
//Invocamos a las funciones de los campos de validacion
function validarFormularioCuenta (e){
    e.preventDefault();
    
    campoNombreCuenta();
    campoApellidoCuenta();
    campoUsuarioCuenta();
    campoEmailCuenta();
    campoContraseniaCuenta();
   
    
    
}

//Funcion para resetear el formulario cuando se envia

function resetearFormularioCuenta(){
    console.log("formulario enviado")
    micuenta.reset();
}
