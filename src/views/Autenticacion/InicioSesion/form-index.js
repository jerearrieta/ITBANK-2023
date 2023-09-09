document.getElementById('formulario').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorMensaje = document.getElementById('errorMensaje');

    function mostrarMensaje(mensaje) {
        errorMensaje.textContent = mensaje;
        setTimeout(function() {
            errorMensaje.textContent = '';
        }, 5000);
    }

    if(email === '' || password === '') {
        mostrarMensaje('Por favor, completa todos los campos');
        event.preventDefault();
        
    } else if(!email.includes('@')) {
        mostrarMensaje('El correo electronico debe contener @');
        event.preventDefault();

    } else if(password.length > 8) {
        mostrarMensaje('La contraseña debe tener un maximo de 8 caracteres');
        event.preventDefault();
    }
});

