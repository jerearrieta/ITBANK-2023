import getAPI from "@/app/services/api";


function Movimiento({ title, value, to, date }) {
    return (
        <div className="flex flex-col self-stretch gap-1 p-5">
            <div className="flex self-stretch">
                <p className="flex-1 text-lg">{title}</p>
                <p className="text-lg text-right">{value}</p>
            </div>
            <div className="flex self-stretch">
                <p className="flex-1 text-sm">{to}</p>
                <p className="text-sm text-right">{date}</p>
            </div>
        </div>
    );
}


export default async function CuentaDetail({ params }) {
    const api = getAPI();
    const { data: cuenta } = await api.get(`cuentas/${params.iban}`);
    const { data: movimientos } = await api.get(`movimientos?origen=${params.iban}&destino=${params.iban}`);

    return (
        <>
            <h1>Cuenta Nº {cuenta.iban}</h1>
            <hr />
            <div>
                <h2>Datos de la cuenta</h2>
                <div>
                    {cuenta.iban}
                    {cuenta.tipo}
                    {cuenta.cliente}
                    {cuenta.saldo}
                </div>
            </div>

            <div>
                <h2>Movimientos</h2>
                <div>
                    {movimientos.map((mov, key) => <Movimiento key={key} title="Transferencia" value={mov.monto} to={mov.cuenta_destino} date={mov.fecha} />)}
                </div>
            </div>
        </>
    );
}