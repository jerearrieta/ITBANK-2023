import { createClient } from "@supabase/supabase-js";

import Link from "next/link";

// dynamic = "error" fuerza a que el componente/pagina sea generado de forma estatica, y si algo lo impidiera, lanza un error.
export const dynamic = "error";
export const dynamicParams = false;

// generateStaticParams es el equivalente a getStaticPaths del Pagers Router
export async function generateStaticParams() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("id, dni, first_name, last_name, birth, sex");

    return data.map((record) => ({
        id: String(record.id)
    }))
}

export default async function UserDetail({ params }) {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("dni, first_name, last_name, birth, sex").eq("id", params.id).single();

    return (
        <div className="flex flex-col w-3/4 mx-auto rounded-2xl shadow-md bg-gray-300 p-3">
            <p className="border-b py-2 font-bold">Id: {params.id}</p>
            <p className="border-b py-2 font-bold">Dni: {data.dni}</p>
            <p className="border-b py-2 font-bold">Nombre: {data.first_name}</p>
            <p className="border-b py-2 font-bold">Apellido: {data.last_name}</p>
            <p className="border-b py-2 font-bold">Nacimiento: {data.birth}</p>
            <p className="border-b py-2 font-bold">Sexo: {data.sex}</p>

            <Link className="py-2 font-bold flex items-center justify-center self-stretch gap-5 p-3 duration-500 hover:bg-[#02568A] hover:cursor-pointer" href={`/transferencias/${params.id}`}>Transferir</Link>
        </div>
    );
}
