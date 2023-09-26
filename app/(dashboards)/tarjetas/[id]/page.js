import { createClient } from "@supabase/supabase-js";

// dynamic = "error" fuerza a que el componente/pagina sea generado de forma estatica, y si algo lo impidiera, lanza un error.
export const dynamic = "error";
export const dynamicParams = false;

// generateStaticParams es el equivalente a getStaticPaths del Pagers Router
export async function generateStaticParams() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("cards").select();

    return data.map((record) => ({
        id: String(record.id)
    }))
}

export default async function CardDetail({ params }) {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("cards").select().eq("id", params.id).single();

    return (
        <div>
            <p>{params.id}</p>

        </div>
    );
}
