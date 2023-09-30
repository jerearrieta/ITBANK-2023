import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Link from "next/link";


function CardListItem({ id, number, expiration, limit }) {
    return (
        <Link href={`/tarjetas/${id}`} className="flex flex-col self-stretch gap-1 p-5 border-t first:border-t-0">
            <p>Numero: {number}</p>
            <p>Fecha de caducidad: {expiration}</p>
            <p>Limite: {limit}</p>
        </Link>
    );
}

export const metadata = {
    title: 'Tarjetas disponibles',
    description: 'Tarjetas disponibles de Guardian Bank',
  }

export default async function CardList() {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.from("cards").select("id, number, expiration, limit");

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Selecciona una de sus tarjetas</h1>

            <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
                {data.map((record, index) => <CardListItem key={index} id={record.id} number={record.number} expiration={record.expiration} cvc={record.cvc} limit={record.limit} />)}
            </div>
        </>
    );
}
