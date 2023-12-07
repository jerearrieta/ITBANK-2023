import getAPI from "@/app/utils/api";
import { obtenerStringDineroDecimal } from "@/app/utils/dinero";

import ListaMovimientos from "@/app/components/ListaMovimientos";


export default async function Home() {
    const api = getAPI();

    const { data: cliente } = await api.get("clientes/yo/");
    const { data: cuentas } = await api.get("cuentas/");

    let saldo = 0;
    const ibans = cuentas.map(cuenta => {
        saldo += cuenta.saldo;
        return cuenta.iban;
    });

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Hola, {cliente.first_name} {cliente.last_name}</h1>
                <hr className="border-gray-400" />
            </div>

            <div className="flex flex-col bg-white rounded-xl shadow-lg">
                <h2 className="px-4 py-3 text-2xl font-semibold">Resumen de tus cuentas</h2>
                <hr />
                <div className="flex flex-col gap-1 px-4 py-3">
                    <p>Dinero disponible</p>
                    <p className="text-2xl font-bold">{obtenerStringDineroDecimal(saldo)}</p>
                </div>
            </div>

            <hr className="border-gray-400" />

            <div className="flex flex-col bg-white rounded-xl shadow-lg">
                <h2 className="px-4 py-3 text-2xl font-semibold">Actividad reciente</h2>
                <hr />
                <ListaMovimientos ibans={ibans} />
            </div>
        </div>
    );
}