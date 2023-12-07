import getAPI from "@/app/utils/api";

import Link from 'next/link';

export const metadata = {
  title: "Facturas pendientes",
  description: "Facturas pendientes de Guardian Bank",
};

function Factura({ id, emisor, monto, pdf }) {
  return (
    <Link href={`/facturas/${id}`} className="flex flex-col self-stretch gap-1 p-5 border-t first:border-t-0">
        <p>Emisor: {emisor}</p>
        <p>Total a pagar: ${monto}</p>
        <p>Pdf de factura: {pdf}</p>
    </Link>
  );
}

export default async function ListaFacturas() {
  try {
    const api = getAPI();
    const { data } = await api.get("facturas/");
    console.log('data: ', data)

    return (
      <>
        <h1 className="text-3xl font-bold mb-4">
          Selecciona la factura que desea pagar
        </h1>

        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
          {data.map((record, index) => (
            <Factura
              key={index}
              id={record.id}
              emisor={record.emisor} // Verifica que el nombre sea correcto
              monto={record.monto} // Verifica que el nombre sea correcto
              pdf={record.pdf} // Verifica que el nombre sea correcto
            />
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error al obtener facturas:", error);
    return <p>Error al cargar las facturas.</p>;
  }
}
