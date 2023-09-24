import { createClient } from "@supabase/supabase-js";

import Link from "next/link";

// dynamic = "error" fuerza a que el componente/pagina sea generado de forma estatica, y si algo lo impidiera, lanza un error.
export const dynamic = "error";

function UserListItem({ id, first_name, last_name, dni }) {
    return (
        <Link href={`/usuarios/${id}`} className="flex flex-col self-stretch gap-1 p-5">
            <p className="text-lg">{`${first_name} ${last_name}`}</p>
            <p className="text-sm">{dni}</p>
        </Link>
    );
}

export default async function UserList() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("id, dni, first_name, last_name");

    return (
        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
            {data.map((record) => <><UserListItem key={record.id} id={record.id} first_name={record.first_name} last_name={record.last_name} dni={record.dni} /><hr /></>)}
        </div>
    );
}