import InvoiceDetail from "./InvoiceDetail";
import getAPI from "@/app/services/api";


export default async function Page({ params }) {
    try{
    const api = getAPI();
    const { data } = await api.get('facturas/')

    return <InvoiceDetail id={params.id} cliente={data.cliente} emisor={data.emisor} monto={data.monto} pdf={data.pdf} />;
} catch (error) {
    console.error("Error al obtener facturas:", error);
    return <p>Error al cargar las facturas.</p>;
}
    
}