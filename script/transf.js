let formulario = document.getElementById("form-transf");
let btnTransf = document.getElementById("boton-transf");
let saldoDisponible = document.getElementById("saldo-disponible");
let montoDisponible = sessionStorage.getItem('montoDisponible') || 100000;
let saldoUsdDisponible = document.getElementById('usd-disponible');
let montoDisponibleUsd = sessionStorage.getItem('usdDisponible') || 1000;
let saldoDisponibleCard = document.getElementById('saldo-disponible-card');
let usdDisponibleCard = document.getElementById('usd-disponible-card');

if(saldoDisponibleCard) {
  saldoDisponibleCard.textContent = `$ ${montoDisponible}`;
}

if (usdDisponibleCard) {
  usdDisponibleCard.textContent = `u$d ${montoDisponibleUsd}`;
}

if (saldoDisponible) {
  saldoDisponible.textContent = `$ ${montoDisponible}`;
} 

if (saldoUsdDisponible) {
  saldoUsdDisponible.textContent = `u$d ${montoDisponibleUsd}`;
}

if(btnTransf) {
  btnTransf.addEventListener("click", (e) => {
    let cbu = document.getElementById("cbu").value;
    let montoTransf = parseFloat(document.getElementById("monto-transf").value);
    let monedaSeleccionada = document.getElementById('moneda').value;
    let motivo = document.getElementById("motivo").value;
    let span = document.getElementById("span");
  
    function mostrarMensaje(mensaje) {
      span.textContent = mensaje;
      setTimeout(function () {
        span.textContent = "";
      }, 5000);
    }
  
    if (cbu === "" || isNaN(montoTransf) || motivo === "" || monedaSeleccionada === '') {
      mostrarMensaje("Por favor, completa todos los campos.");
      return;
    }
  
    if (monedaSeleccionada === '0') {
      if (montoTransf > montoDisponible) {
        mostrarMensaje(`Dinero insuficiente, saldo disponible $${montoDisponible}`);
      } else {
        montoDisponible -= montoTransf;
        sessionStorage.setItem('montoDisponible', montoDisponible);
        mostrarMensaje(
          `Transferencia en pesos exitosa, tu monto disponible es de: $${sessionStorage.getItem('montoDisponible')}`
        );
      }
    } else if (monedaSeleccionada === '1') {
      if (montoTransf > montoDisponibleUsd) {
        mostrarMensaje(`Dinero insuficiente, saldo disponible $${montoDisponibleUsd}`);
      } else {
        montoDisponibleUsd -= montoTransf;
        sessionStorage.setItem('usdDisponible', montoDisponibleUsd);
        mostrarMensaje(`Transferencia en usd exitosa, tu monto disponible es de: $${montoDisponibleUsd}`);
      }
    }
    
    e.preventDefault();
  });
}


