import fs from 'fs';
import path from 'path';

const usersFile = path.join(process.cwd(), "data", "users.json");

export function registerUser(email, clave) {
    let users = fs.readFileSync(usersFile);
    users = JSON.parse(users);

    if (users.hasOwnProperty(email)) {
        return false;
    }

    users[email] = {};

    users = JSON.stringify(users);
    fs.writeFileSync(usersFile, users);
    
    return true;
}

export function logUser(email, clave, recordar) {
    let users = fs.readFileSync(usersFile);
    users = JSON.parse(users);

    if (users.hasOwnProperty(email) && users[email].pwd === clave) {
        return true;
    }

    return false;
}

export function isUserLoggedIn(){
    return localStorage.getItem("userLoggedIn");
}

export function logout() {
    localStorage.setItem("userLoggedIn", false);
}
