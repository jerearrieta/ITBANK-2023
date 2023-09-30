import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import InvoiceDetail from "./InvoiceDetail";


export default async function Page({ params }) {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.from("invoices").select("issuer, total, is_paid, paid_at, invoice_pdf_url").eq("id", params.id).single();

    return <InvoiceDetail id={params.id} issuer={data.issuer} total={data.total} invoice_pdf_url={data.invoice_pdf_url} />;
}