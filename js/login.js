//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

document.getElementById('submit').addEventListener('click', function(e) {
let usuario = document.getElementById('usuario');
let contraseña = document.getElementById('contraseña');



if(usuario.value === '') {
alert("Debe completar el Usuario");

} if(contraseña.value === '') {
    alert("Debe completar la Contraseña");
  }
  
})


    







});

