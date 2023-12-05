import getAPI from "@/app/services/api";

import ListaMovimientos from "@/app/components/ListaMovimientos";


export default async function CuentaDetail({ params: { iban } }) {
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
                    <p>Saldo: {cuenta.saldo}</p>
                </div>
            </div>

            <div className="flex flex-col bg-white rounded-xl shadow-lg">
                <div className="flex justify-between items-center px-4 py-3">
                    <h2 className="text-2xl font-semibold">Movimientos</h2>
                    {/* <Link href={`/transferir/${iban}/`} className="px-3 py-2 bg-[#009ee3] text-white rounded-lg font-medium">Realizar transferencia</Link> */}
                </div>
                
                <hr />
                
                <ListaMovimientos ibans={[iban]} cuenta_origen={iban} cuenta_destino={iban} />
            </div>
        </div>
    );
}