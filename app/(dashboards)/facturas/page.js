import getAPI from "@/app/utils/api";

import Link from "next/link";


export const metadata = {
    title: 'Facturas pendientes',
    description: 'Facturas pendientes de Guardian Bank',
}


function Factura({ id, issuer, total }) {
    return (
        <Link href={`/facturas/${id}`} className="flex flex-col self-stretch gap-1 p-5 border-t first:border-t-0">
            <p>Emisor: {issuer}</p>
            <p>Total a pagar: ${total}</p>
        </Link>
    );
}

export default async function ListaFacturas() {
    const api = getAPI();
    const { data } = await api.get("facturas/");

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Selecciona la factura que desea pagar</h1>

            <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
                {data.map((record, index) => <Factura key={index} id={record.id} issuer={record.issuer} total={record.total} />)}
            </div>
        </>
    );
}
