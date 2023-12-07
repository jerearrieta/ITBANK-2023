import getAPI from "@/app/utils/api";
import { obtenerStringDineroDecimal } from "@/app/utils/dinero";

import Link from 'next/link';


export const metadata = {
  title: "Facturas pendientes",
  description: "Facturas pendientes de Guardian Bank",
};


function Factura({ id, emisor, monto }) {
  return (
    <Link href={`/facturas/${id}`} className="flex flex-col self-stretch gap-1 p-5 border-t first:border-t-0">
      <p>Emisor: {emisor}</p>
      <p>Total a pagar: {obtenerStringDineroDecimal(monto)}</p>
    </Link>
  );
}

export default async function ListaFacturas() {
  const api = getAPI();

  const { data: facturas } = await api.get("facturas/");

  const facturasNoPagadas = facturas.filter((factura) => !factura.fue_pagada);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Sus facturas pendientes</h1>

      {facturasNoPagadas.length === 0 && <p>No posee ninguna factura pendiente.</p>}

      <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
        {facturasNoPagadas.map((record, index) => (
          <Factura
            key={index}
            id={record.id}
            emisor={record.emisor}
            monto={record.monto}
            fue_pagada={record.fue_pagada}
          />
        ))}
      </div>
    </>
  );
}
