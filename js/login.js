/* Creando clase y removiendo clase para animacion */

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', ()=>
container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', ()=>
container.classList.remove('right-panel-active')
);


/* Validando el Login */
function guardar(usuario, pass){  

  if (usuario.trim()==="" || pass.trim()===""){ //Chequea que el usuario recibido no esté vacío. 
  //El método trim elimina los espacios en blanco al inicio y al final del mismo.
      alert("El usuario está vacío");
  }    else {
  localStorage.setItem("usuario", usuario.trim()); //setItem almacena el usuario en la posición "usuario"
  localStorage.setItem("password", pass.trim()); // Almaceno la contraseña
  
  alert (" Usuario : " + usuario + " Password : " + pass ); 
  
 
  location.href="login.html";
  
  
 
  }
}




/* Validamos el registro */
    document.getElementById('boton-registro').addEventListener('click', function(e) {
      let emailRegistro = document.getElementById('email-registro');
      let contraseñaRegistro = document.getElementById('contraseña-registro');
      let nombreRegistro = document.getElementById('nombre-registro');
      let validacion = true;
      
      
      
      if(emailRegistro.value === "" || contraseñaRegistro.value === "" || nombreRegistro.value === "" ) {
      alert("Complete todos los campos para registrarse");
      validacion = false;
      
      } if(validacion) {
        location.href = 'login.html';
      }
      
      
      
      
        
      });




      
