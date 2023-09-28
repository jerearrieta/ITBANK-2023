import { createClient } from "@supabase/supabase-js";

import TransactionForm from "./TransactionForm";

// dynamic = "force-dynamic" fuerza a que el componente/pagina sea generado de forma dinamica.
export const dynamic = "force-dynamic";

export default async function Page({ params }) {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("first_name, last_name").eq("id", params.id).single();

    return <TransactionForm id={params.id} first_name={data.first_name} last_name={data.last_name}/>;
}
