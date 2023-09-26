
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// dynamic = "force-dynamic" fuerza a que el componente/pagina sea generado de forma dinamica.
export const dynamic = "force-dynamic";

export default async function UserDetail({ params }) {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.from("invoices").select("id, total, invoice_pdf_url").eq("id", params.id).single();

    return (
        <div>
            <p>{params.id}</p>
            <p>{data.total}</p>
            <p>{data.invoice_pdf_url}</p>

            
        </div>
    );
}