"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";


export default function InvoiceDetail({ id, issuer, total, invoice_pdf_url }) {
  const [state, setState] = useState([null]);
  const router = useRouter();

  async function handleClick(e) {
    setState(["processing"]);

    const supabase = createClientComponentClient();
    const { error } = await supabase.rpc("pay_invoice", { invoice_id: id });

    if (error) {
      setState(["error", error.message]);
    }
    else {
      setState(["success"]);
    }
  }

  return (
    <>
      <div className="flex mx-auto flex-col w-1/3 border-2 border-black p-4 rounded">
        <div className="flex flex-col mx-auto">
          <p>Issuer: {issuer}</p>
          <p className="pb-5">Total: {total}</p>
        </div>
        <Link href={invoice_pdf_url} target="_blank" className="btn">
          <div>
            <p className="text-white font-bold">Ver factura</p>
          </div>
        </Link>

        <ProcessingButton
          defaultText="Pagar factura"
          onClick={handleClick}
          isProcessing={state === "processing"}
          className="btn bg-[#02568a] mt-4 font-bold duration-1000 hover:bg-[#3a87b7]"
        />
      </div>

      {state[0] === "error" && <ErrorToast message={state[1]} />}
      {state[0] === "success" && <SuccessModal title="Factura pagada!" message={`El pago de la factura Nº${id} fue registrado correctamente.`} onClick={() => router.push("facturas")} />}
    </>
  );
}
