import getAPI from "@/app/utils/api";
import { obtenerStringDineroDecimal } from "@/app/utils/dinero";

import ListaMovimientos from "@/app/components/ListaMovimientos";


export default async function DetalleCuenta({ params: { iban } }) {
    const api = getAPI();

    const { data: cuenta } = await api.get(`cuentas/${iban}/`);

    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1 className="text-3xl font-bold mb-4">Cuenta Nº {cuenta.iban}</h1>
                <hr className="border-gray-400" />
            </div>

            <div className="flex flex-col bg-white rounded-xl shadow-lg">
                <h2 className="px-4 py-3 text-2xl font-semibold">Datos de la cuenta</h2>
                <hr />
                <div className="flex flex-col gap-4 p-4 text-lg">
                    <p>Propietario/a: {cuenta.cliente}</p>
                    <p>Tipo de cuenta: {cuenta.tipo}</p>
                    <p>Saldo: {obtenerStringDineroDecimal(cuenta.saldo)}</p>
                </div>
            </div>

            <div className="flex flex-col bg-white rounded-xl shadow-lg">
                <h2 className="px-4 py-3 text-2xl font-semibold">Movimientos</h2>
                <hr />
                <ListaMovimientos ibans={[iban]} cuenta_origen={iban} cuenta_destino={iban} />
            </div>
        </div>
    );
}