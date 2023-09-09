import React from "react";

const DerechaRegistro = () => {
  return (
    <>
      <div className="derecha">
        <div className="conteiner_form">
          <form
            id="formulario"
            className="formulario-registro"
            action="inicio.html"
            method="post"
          >
            <div className="conteiner-controls">
              <h4 className="titulo-registro">Regístrese</h4>
              <input
                type="text"
                id="dni"
                className="controls"
                placeholder="DNI"
              />
              <input
                type="text"
                id="usuario"
                className="controls"
                placeholder="Nombre de usuario"
              />
              <input
                type="password"
                id="password"
                className="controls"
                placeholder="Contraseña"
              />
            </div>
            <div className="span">
              <span className="span" id="errorMensaje"></span>
            </div>
            <input type="submit" value="Registrarse" className="button" />
          </form>
        </div>
      </div>
    </>
  );
};

export default DerechaRegistro;
