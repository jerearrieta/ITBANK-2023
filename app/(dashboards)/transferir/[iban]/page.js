import { createClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import TransactionForm from "./TransactionForm";

export const metadata = {
    title: 'Sistema de transferencias',
    description: 'Sistema de transferencias de Guardian Bank',
  }

export default async function Page({ params }) {
    const user_id = (await createServerComponentClient({ cookies }).auth.getUser()).data.user.id;
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    const { data } = await supabase.from("users").select("first_name, last_name").eq("id", params.id).neq("user_id", user_id).single();

    if (data === null) {
        return <p>No puedes transferirte a ti mismo</p>
    }

    return <TransactionForm id={params.id} first_name={data.first_name} last_name={data.last_name}/>;
}
