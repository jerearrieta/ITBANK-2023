import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Derecha = () => {
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
      navigate('/home');
    }
  };

  return (
    <>
      <div className="derecha">
        <div className="conteiner_form">
          <form
            id="formulario"
            className="formulario"
            action="inicio.html"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h4>Bienvenido al ITBANK</h4>
            <input
              id="email"
              className="controls"
              placeholder="ejemplo@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              id="password"
              className="controls"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
            />
            <input type="submit" defaultValue="Ingresar" className="button" />
            <div className="span">
              <span id="errorMensaje">{errorMensaje}</span>
            </div>
            <p>¿Olvidaste tu contraseña?</p>
            <hr className="hr" />
            <a className="registro" href="registro.html">
              <p>¿No tiene una cuenta? Regístrate</p>
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Derecha;

