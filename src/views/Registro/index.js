import "./style.css";

export default function Registro() {
  return (
    <>
      <main className="conteiner">
        <div className="izquierda">
          <div className="conteiner_logo">
            <img className="logo" src="img/white-logo.png" alt="logo itba" />
          </div>
        </div>
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
                <span className="span" id="errorMensaje" />
              </div>
              <input
                type="submit"
                defaultValue="Registrarse"
                className="button"
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
