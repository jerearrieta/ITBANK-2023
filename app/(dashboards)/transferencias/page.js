import { createClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Link from "next/link";


function UserListItem({ id, first_name, last_name, dni }) {
    return (
        <Link href={`/usuarios/${id}`} className="flex flex-col self-stretch gap-1 p-5 border-t first:border-t-0">
            <p className="text-lg">{`${first_name} ${last_name}`}</p>
            <p className="text-sm">{dni}</p>
        </Link>
    );
}

export default async function UserList() {
    const user_id = (await createServerComponentClient({ cookies }).auth.getUser()).data.user.id;
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("id, dni, first_name, last_name").neq("user_id", user_id);

    return (
        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
            {data.map((record, index) => <UserListItem key={index} id={record.id} first_name={record.first_name} last_name={record.last_name} dni={record.dni} />)}
        </div>
    );
}