import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Link from "next/link";

// dynamic = "force-dynamic" fuerza a que el componente/pagina sea generado de forma dinamica.
export const dynamic = "force-dynamic";

function InvoiceListItem({ id, total, invoice_pdf_url }) {
    return (
        <Link href={invoice_pdf_url} target="_blank" className="flex flex-col self-stretch gap-1 p-5 border-t first:border-t-0">
            <p className="text-lg">{`${total}`}</p>
        </Link>
    );
}

export default async function InvoiceList() {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.from("invoices").select("id, issuer, total, invoice_pdf_url");

    return (
        <div className="flex flex-col self-stretch rounded-2xl shadow-md bg-gray-300">
            {data.map((record, index) => <InvoiceListItem key={index} id={record.id} total={record.total} invoice_pdf_url={record.invoice_pdf_url} />)}
        </div>
    );
}