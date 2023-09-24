// dynamic = "force-dynamic" fuerza a que el componente/pagina sea generado de forma dinamica.
export const dynamic = "force-dynamic";

export default async function TransactionForm({ params }) {
    return (
        // <Formulario title="Transferir dinero">
        //     <div className="cont-span">
        //         <span id="span" className="span"></span>
        //     </div>
        // </Formulario>
        <div>{params.id}</div>
    );
}