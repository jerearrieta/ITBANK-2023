import { createClient } from "@supabase/supabase-js";

import Link from "next/link";

// dynamic = "error" fuerza a que el componente/pagina sea generado de forma estatica, y si algo lo impidiera, lanza un error.
export const dynamic = "error";
export const dynamicParams = false;

// generateStaticParams es el equivalente a getStaticPaths del Pagers Router
export async function generateStaticParams() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("id, dni, first_name, last_name");

    return data.map((record) => ({
        id: String(record.id)
    }))
}

export default async function UserDetail({ params }) {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("dni, first_name, last_name").eq("id", params.id).single();

    return (
        <div>
            <p>{params.id}</p>
            <p>{data.dni}</p>
            <p>{data.first_name}</p>
            <p>{data.last_name}</p>

            <Link href={`/transferencias/${params.id}`}>Transferir</Link>
        </div>
    );
}
