import getAPI from "@/app/utils/api";
import { obtenerStringDineroDecimal } from "@/app/utils/dinero";

import Link from "next/link";


export const metadata = {
  title: 'Tus cuentas',
  description: 'Cuentas disponible de Guardian Bank',
}


function CuentaBancaria({ url, iban, tipo, saldo }) {
  return (
    <div className="flex flex-col flex-1 p-6 rounded-lg bg-white shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]">
      <h2 className="text-xl mb-10 font-bold">{tipo} Nº {iban}</h2>
      <p className="font-semibold">Saldo</p>
      <p className="text-3xl font-bold">{obtenerStringDineroDecimal(saldo)}</p>
      <hr className="border-gray-300 my-5" />
      <Link href={`/cuentas/${iban}/`}>Ver movimientos</Link>
    </div>
  );
}

export default async function ListaCuentasBancarias() {
  const api = getAPI();

  const { data: cuentas } = await api.get("cuentas/");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tus cuentas</h1>
          <Link href="/cuentas/nueva/" className="btn bg-sky-500 text-black font-semibold">Solicitar nueva cuenta</Link>
        </div>
        <hr className="border-gray-400" />
      </div>

      {cuentas.length === 0 && <p>Actualmente no posee ninguna cuenta.</p>}

      <div className="flex flex-col gap-5 text-blue-800">
        {cuentas.map((cuenta, key) => <CuentaBancaria key={key} {...cuenta} />)}
      </div>
    </div>
  );
}