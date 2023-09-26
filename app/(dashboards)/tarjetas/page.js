import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Link from "next/link";


function CardListItem({ id, number, expiration, cvc, limit }) {
    return (
        <Link href={`/tarjetas/${id}`} className="flex flex-col self-stretch gap-1 p-5 border-t first:border-t-0">
            <p>{number}</p>
            <p>{expiration}</p>
            <p>{cvc}</p>
            <p>{limit}</p>
        </Link>
    );
}

export default async function CardList() {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.from("cards").select("id, number, expiration, cvc, limit");

    return (
        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
            {data.map((record, index) => <CardListItem key={index} id={record.id} number={record.number} expiration={record.expiration} cvc={record.cvc} limit={record.limit} />)}
        </div>
    );
}
