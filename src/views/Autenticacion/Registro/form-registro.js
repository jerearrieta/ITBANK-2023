document.getElementById('formulario').addEventListener('submit', function(event) {
    let dni = document.getElementById('dni').value;
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;
    let errorMensaje = document.getElementById('errorMensaje');

    function mostrarMensaje(mensaje) {
        errorMensaje.textContent = mensaje;
        setTimeout(function() {
            errorMensaje.textContent = '';
        }, 5000);
    }

    if(dni === '' || usuario === '' || password === '') {
        mostrarMensaje('Por favor, completa todos los campos');
        event.preventDefault();
    } else if (dni.length !== 8 || isNaN(dni)) {
        mostrarMensaje('El DNI debe tener exactamente 8 numeros');
        event.preventDefault();
    } else if (!/^\d+$/.test(dni)) {
        mostrarMensaje('El DNI solo puede contener numeros');
        event.preventDefault();
    } else if (usuario.length > 10 || usuario.length < 6) {
        mostrarMensaje('El nombre de usuario debe tener entre 6 y 10 caracteres');
        event.preventDefault();
    } else if (password.length > 8) {
        mostrarMensaje('La contraseña debe tener un maximo de 8 caracteres');
        event.preventDefault();
    }
});
