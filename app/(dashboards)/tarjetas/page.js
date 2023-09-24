import { createClient } from "@supabase/supabase-js";

import Link from "next/link";


export const dynamic = "error";

function CardListItem({ id, first_name, last_name, dni }) {
    return (
        <Link href={`/transferencias/${id}`} className="flex flex-col self-stretch gap-1 p-5">
            <p className="text-lg">{`${first_name} ${last_name}`}</p>
            <p className="text-sm">{dni}</p>
        </Link>
    );
}

export default async function CardList() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("id, dni, first_name, last_name");

    return (
        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
            {data.map((record) => <><Contacto id={record.id} first_name={record.first_name} last_name={record.last_name} dni={record.dni} /><hr /></>)}
        </div>
    );
}
