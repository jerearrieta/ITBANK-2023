import React from "react";

export const SaldoCuentas = () => {
  return (
    <div>
      <div className="cont-cuentas">
        <p className="p-cuentas">Cuentas</p>
        <p className="p-cuentas2">Saldo total de tus cuentas</p>
        <div className="cont-moneda">
          <div className="pesos">
            <p className="p-moneda">En pesos</p>
            <p id="saldo-disponible" className="p-cantidad" />
          </div>
          <div className="dolares">
            <p className="p-moneda">En dolares</p>
            <p id="usd-disponible" className="p-cantidad" />
          </div>
        </div>
      </div>
    </div>
  );
};