import getAPI, { getCustomerIBANs } from "@/app/utils/api";

import Link from "next/link";


export default async function ListaRecientes() {
    const api = getAPI();

    const { data: movimientos } = await api.get("movimientos/");

    const ibans = await getCustomerIBANs();
    const recientes = [];
    for (const mov of movimientos) {
        const contacto = ibans.includes(mov.cuenta_origen) ? [mov.cuenta_destino, mov.cliente_destino] : [mov.cuenta_origen, mov.cliente_origen];
        if (contacto[0] !== null) recientes.push(contacto);
    }

    return recientes.length > 0 && (
        <div className="flex flex-col bg-white rounded-xl">
            <h2 className="px-4 py-3 text-2xl font-semibold">Recientes</h2>
            <hr />
            <div className="flex flex-col gap-4 p-4">
                {recientes.map((contacto, key) => {
                    <Link key={key} href={`transferir/${contacto[0]}/`} className="flex flex-col self-stretch gap-1">
                        <p className="text-lg">{contacto[1]}</p>
                        <p className="text-sm">{contacto[0]}</p>
                    </Link>
                })}
            </div>
        </div>
    );
}