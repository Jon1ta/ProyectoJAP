//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

document.getElementById('submit').addEventListener('click', function(e) {
let usuario = document.getElementById('usuario');
let contraseña = document.getElementById('contraseña');
let validacion = true;



if(usuario.value === '') {
alert("Debe completar el Usuario");
validacion = false;

} if(contraseña.value === '') {
    alert("Debe completar la Contraseña");
    validacion = false;
  } if (validacion) {
    window.location = 'login.html';
  }
  
});

});

