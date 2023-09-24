import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Link from "next/link";

// dynamic = "force-dynamic" fuerza a que el componente/pagina sea generado de forma dinamica.
export const dynamic = "force-dynamic";

function InvoiceListItem({ id, total, invoice_pdf_url }) {
    return (
        <Link href={invoice_pdf_url} target="_blank" className="flex flex-col self-stretch gap-1 p-5">
            <p className="text-lg">{`${total}`}</p>
        </Link>
    );
}

export default async function InvoiceList() {
    const supabase = createServerComponentClient({ cookies });
    const userData = await supabase.auth.getUser();
    const { data } = await supabase.from("invoices").select("id, total, invoice_pdf_url, users (user_id)").eq("users.user_id", userData.data.user.id);

    return (
        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
            {data.map((record) => <><InvoiceListItem key={record.id} id={record.id} total={record.total} invoice_pdf_url={record.invoice_pdf_url} /><hr /></>)}
        </div>
    );
}