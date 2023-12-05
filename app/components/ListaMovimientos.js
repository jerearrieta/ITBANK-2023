import getAPI from "@/app/services/api";


function Movimiento({ movimiento, es_saliente }) {
    const className = es_saliente ? "text-lg text-right" : "text-lg text-right text-green-500";

    const monto = (Math.abs(Number(movimiento.monto)) / 100).toFixed(2);

    return (
        <div className="flex flex-col self-stretch gap-1">
            <div className="flex self-stretch">
                <p className="flex-1 text-lg">{es_saliente ? "Transferencia enviada" : "Transferencia recibida"}</p>
                <p className={className}>{es_saliente ? `- $${monto}` : monto}</p>
            </div>
            <div className="flex self-stretch">
                <p className="flex-1 text-sm">{es_saliente ? movimiento.cliente_destino : movimiento.cliente_origen}</p>
                <p className="text-sm text-right">{movimiento.fecha}</p>
            </div>
        </div>
    );
}

export default async function ListaMovimientos({ ibans, cuenta_origen, cuenta_destino }) {
    const api = getAPI();

    let url = "movimientos/";
    let params = {};
    if (cuenta_origen) params.origen = cuenta_origen;
    if (cuenta_origen) params.destino = cuenta_destino;

    const { data } = await api.get(url, { params });

    return (
        <div className="flex flex-col gap-4 p-4">
            {data.map((mov, key) => <Movimiento key={key} movimiento={mov} es_saliente={ibans.includes(mov.cuenta_origen)} />)}
        </div>
    );
}
