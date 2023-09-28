"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

import Link from "next/link";
import ProcessingButton from "../../components/ProcessingButton";


export default function InvoiceDetail({id, issuer, total, invoice_pdf_url}) {
    const [state, setState] = useState(null);

    async function handleClick(e) {
        const supabase = createClientComponentClient();

        setState("processing");

        const { error } = await supabase.rpc('pay_invoice', { invoice_id: id });

        console.log(error);

        if (error) {
            setState("error");
            console.log("Error");
        }
        else {
            setState("success");
            console.log("Bien");
        }
    }

    return (
        <div>
            <p>{issuer}</p>
            <p>{total}</p>
            <Link href={invoice_pdf_url} target="_blank" className="btn">
                Ver factura
            </Link>

            <ProcessingButton defaultText="Pagar factura" onClick={handleClick} isProcessing={state === "processing"} className="btn bg-[#02568a] mt-4 font-bold duration-1000 hover:bg-[#3a87b7]" />
        </div>
    );
}