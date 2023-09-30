import { Card } from "./components/Card";
import { SaldoCuentas } from "./components/SaldoCuentas";
import "./style.css";

export const metadata = {
  title: 'Tus cuentas',
  description: 'Cuentas disponible de Guardian Bank',
}

export default function Cuentas() {
  return (
    <div className="cuentas-cont-main">
      <SaldoCuentas />
      <div className="bot cont-card">
        <Card isPrincipal={true} numeroCard="001-0000001/1" />
        <Card numeroCard="002-0000002/2" />
        <Card numeroCard="003-0000003/3" />
      </div>
    </div>
  );
}