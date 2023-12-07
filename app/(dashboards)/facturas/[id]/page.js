import getAPI from "@/app/utils/api";

import InvoiceDetail from "./InvoiceDetail";


export default async function Page({ params: { id } }) {
    const api = getAPI();

    try {
        const { data: factura } = await api.get(`facturas/${id}/`);

        return <InvoiceDetail id={factura.id} cliente={factura.cliente} emisor={factura.emisor} monto={factura.monto} pdf={factura.pdf} />;
    }
    catch {
        return <p>Error al cargar la factura.</p>;
    }
}