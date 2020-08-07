//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

$('.toggle').click(function(){
   $('.form-login').animate({
       height: "toggle",
       'padding-top': 'toggle',
       'padding-bottom': 'toggle',
       opacity: 'toggle'
   }, "slow");
});







});

