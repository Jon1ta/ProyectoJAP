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
document.getElementById('boton').addEventListener('click', function(e) {
    let email = document.getElementById('email');
    let contraseña = document.getElementById('contraseña');
    let validacion = true;
    
    
    
    if(email.value === "" || contraseña.value === "") {
    alert("Debe completar el usuario Y la contraseña");
    validacion = false;
    
    } if(validacion) {
      location.href = 'login.html';
    }
    
    
    
    
      
    });

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


