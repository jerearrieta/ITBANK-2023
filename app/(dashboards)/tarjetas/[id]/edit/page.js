import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import CardEdit from "./CardEdit";


export default async function Page({ params }) {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.from("cards").select("limit").eq("id", params.id).single();

    return <CardEdit id={params.id} limit={data.limit} />;
}