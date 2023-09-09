import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DerechaRegistro = () => {
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

    if(dni === '' || email === '' || password === '') {
      mostrarMensaje('Por favor, completa todos los campos');
  } else if (dni.length !== 8 || isNaN(dni)) {
      mostrarMensaje('El DNI debe tener exactamente 8 numeros');
  } else if (!/^\d+$/.test(dni)) {
      mostrarMensaje('El DNI solo puede contener numeros');
  }  else if (!email.includes("@")) {
      mostrarMensaje("El correo electrónico debe contener @");
  } else if (password.length > 8) {
      mostrarMensaje('La contraseña debe tener un maximo de 8 caracteres');
  } else {
    navigate('/login')
  }
  }

  return (
    <>
      <div className="derecha">
        <div className="conteiner_form">
          <form
            id="formulario"
            className="formulario-registro"
            action="inicio.html"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="conteiner-controls">
              <h4 className="titulo-registro">Regístrese</h4>
              <input
                type="text"
                id="dni"
                className="controls"
                placeholder="DNI"
                value={dni}
                onChange={handleDniChange}
              />
              <input
                type="text"
                id="usuario"
                className="controls"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                id="password"
                className="controls"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="span">
              <span className="span" id="errorMensaje">{errorMensaje}</span>
            </div>
            <input type="submit" value="Registrarse" className="button" />
          </form>
        </div>
      </div>
    </>
  );
};

export default DerechaRegistro;
