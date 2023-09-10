import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import General from '../components/General';

import styles from './Login.module.css';


const Login = () => {
  useEffect(() => {
    localStorage.setItem("userLoggedIn", false);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");
  const navigate = useNavigate();

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

    if (email === "" || password === "") {
      mostrarMensaje("Por favor, completa todos los campos");
    } else if (!email.includes("@")) {
      mostrarMensaje("El correo electrónico debe contener @");
    } else if (password.length > 8) {
      mostrarMensaje("La contraseña debe tener un máximo de 8 caracteres");
    } else {
      navigate('/');
      localStorage.setItem("userLoggedIn", true);
    }
  };

  return (
    <General>
      <form
        id="formulario"
        className={styles.formulario}
        action="inicio.html"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h4>Bienvenido al ITBANK</h4>
        <input
          id="email"
          className={styles.controls}
          placeholder="ejemplo@gmail.com"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          id="password"
          className={styles.controls}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" defaultValue="Ingresar" className={styles.button} />
        <div className={styles.span_container}>
          <span id="errorMensaje" className={styles.span}>{errorMensaje}</span>
        </div>
        <p>¿Olvidaste tu contraseña?</p>
        <hr className={styles.hr} />
        <Link to="/registro" className={styles.registro}>¿No tiene una cuenta? Regístrate</Link>
      </form>
    </General>
  );
};

export default Login;
