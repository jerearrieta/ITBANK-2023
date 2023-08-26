let formulario = document.getElementById("form-transf");
let btnTransf = document.getElementById("boton-transf");
let saldoDisponible = document.getElementById("saldo-disponible");
let montoDisponible = sessionStorage.getItem('montoDisponible') || 100000;
if (saldoDisponible) {
  saldoDisponible.textContent = montoDisponible;
}


btnTransf.addEventListener("click", (e) => {
  let cbu = document.getElementById("cbu").value;
  let montoTransf = parseFloat(document.getElementById("monto-transf").value);
  let motivo = document.getElementById("motivo").value;
  let span = document.getElementById("span");

  function mostrarMensaje(mensaje) {
    span.textContent = mensaje;
    setTimeout(function () {
      span.textContent = "";
    }, 5000);
  }

  if (cbu === "" || isNaN(montoTransf) || motivo === "") {
    mostrarMensaje("Por favor, completa todos los campos.");
    return;
  }

  if (montoTransf > montoDisponible) {
    mostrarMensaje(`Dinero insuficiente, saldo disponible $${montoDisponible}`);
    e.preventDefault();
  } else {
    sessionStorage.setItem('montoDisponible', montoDisponible - montoTransf);
    mostrarMensaje(
      `Transferencia exitosa, tu monto disponible es de: $${sessionStorage.getItem('montoDisponible')}`
    );
    e.preventDefault();
  }

  return montoDisponible

});



