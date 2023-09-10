import { useState } from "react";
import { useNavigate } from "react-router-dom";

import General from '../components/General';

import styles from './Registro.module.css';


export default function Registro() {
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");
    const navigate = useNavigate();

    const handleDniChange = (event) => {
        setDni(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const mostrarMensaje = (mensaje) => {
        setErrorMensaje(mensaje);
        setTimeout(function () {
            setErrorMensaje("");
        }, 5000);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (dni === '' || email === '' || password === '') {
            mostrarMensaje('Por favor, completa todos los campos');
        } else if (dni.length !== 8 || isNaN(dni)) {
            mostrarMensaje('El DNI debe tener exactamente 8 numeros');
        } else if (!/^\d+$/.test(dni)) {
            mostrarMensaje('El DNI solo puede contener numeros');
        } else if (!email.includes("@")) {
            mostrarMensaje("El correo electrónico debe contener @");
        } else if (password.length > 8) {
            mostrarMensaje('La contraseña debe tener un maximo de 8 caracteres');
        } else {
            navigate('/login')
        }
    };

    return (
        <General>
            <form
                id="formulario"
                className={styles.formulario_registro}
                action="inicio.html"
                method="post"
                onSubmit={handleSubmit}
            >
                <div className={styles.container_controls}>
                    <h4 className={styles.titulo_registro}>Regístrese</h4>
                    <input
                        type="text"
                        id="dni"
                        className={styles.controls}
                        placeholder="DNI"
                        value={dni}
                        onChange={handleDniChange}
                    />
                    <input
                        type="text"
                        id="usuario"
                        className={styles.controls}
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        id="password"
                        className={styles.controls}
                        placeholder="Contraseña"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className={styles.span_container}>
                    <span className={styles.span} id="errorMensaje">{errorMensaje}</span>
                </div>
                <input type="submit" value="Registrarse" className={styles.button} />
            </form>
        </General>
    );
}