import TransactionForm from "./TransactionForm";

// dynamic = "force-dynamic" fuerza a que el componente/pagina sea generado de forma dinamica.
export const dynamic = "force-dynamic";

export default async function Page({ params }) {
    return (
        <TransactionForm />
    );
}