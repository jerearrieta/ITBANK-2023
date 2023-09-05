import './style.css';

export default function Login() {
  return (
    <>
      <main className="conteiner">
        <div className="izquierda">
          <div className="conteiner_logo">
            <img className="logo" src="img/white-logo.png" alt="ITBA" />
          </div>
        </div>
        <div className="derecha">
          <div className="conteiner_form">
            <form
              id="formulario"
              className="formulario"
              action="inicio.html"
              method="POST"
            >
              <h4>Bienvenido al ITBANK</h4>
              <input
                id="email"
                className="controls"
                placeholder="ejemplo@gmail.com"
              />
              <input
                id="password"
                className="controls"
                type="password"
                placeholder="Contraseña"
              />
              <input type="submit" defaultValue="Ingresar" className="button" />
              <div className="span">
                <span id="errorMensaje" />
              </div>
              <p>¿Olvidaste tu contraseña?</p>
              <hr className="hr" />
              <a className="registro" href="registro.html">
                <p>¿No tiene una cuenta? Registrate</p>
              </a>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

