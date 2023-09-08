import React from "react";

const Derecha = () => {
  return (
    <>
      <div classname="derecha">
        <div classname="conteiner_form">
          <form
            id="formulario"
            classname="formulario"
            action="inicio.html"
            method="POST"
          >
            <h4>Bienvenido al ITBANK</h4>
            <input
              id="email"
              classname="controls"
              placeholder="ejemplo@gmail.com"
            />
            <input
              id="password"
              classname="controls"
              type="password"
              placeholder="Contraseña"
            />
            <input type="submit" defaultValue="Ingresar" classname="button" />
            <div classname="span">
              <span id="errorMensaje" />
            </div>
            <p>¿Olvidaste tu contraseña?</p>
            <hr classname="hr" />
            <a classname="registro" href="registro.html">
              <p>¿No tiene una cuenta? Registrate</p>
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Derecha;
