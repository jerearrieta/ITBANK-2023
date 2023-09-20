export function registerUser() {
    // Guardar usuario en users.json
}

export function logUser(email, clave, recordar) {
    // Validar usuario desde users.json
}

export function isUserLoggedIn(){
    return localStorage.getItem("userLoggedIn");
}

export function logout() {
    localStorage.setItem("userLoggedIn", false);
}
