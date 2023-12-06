"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";
import useAPI from "@/app/hooks/useAPI";
import useSWR from "swr";
import Loading from "../../loading";

export default function InvoiceDetail({ id, emisor, monto, pdf }) {
  const [state, setState] = useState([null]);
  const router = useRouter();
  const api = useAPI();
  const { data, error, isLoading } = useSWR(
    `facturas/${id}`,
    (url) => api.get(url).then((response) => response.data),
    { onError: (error) => console.error("Error fetching data:", error) }
  );

  async function paymentClick(e) {
    try {
      await api.put(`facturas/${id}/`, { fue_pagada: true });
      console.log("Payment successful!");
    } catch (error) {
      console.error("Error during payment:", error);
      console.log(error.response.data);
    }
  }

  async function handleClick(e) {
    try {
      await paymentClick();
      setState(["success"]);
    } catch {
      setState(["error"]);
    }
  }

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <h1 className="text-3xl font-bold mb-8 mx-auto">Datos de la factura</h1>

        <div className="flex mx-auto flex-col w-1/3 border-2 border-black p-4 rounded">
          <div className="flex flex-col mx-auto">
            <p>Emisor: {data.emisor}</p>
            <p className="pb-5">Total a pagar: {data.monto}</p>
          </div>
          <Link href={`${data.pdf}`} target="_blank" className="btn">
            <div>
              <p className="text-white font-bold">Ver factura</p>
            </div>
          </Link>

          <ProcessingButton
            defaultText="Pagar factura"
            onClick={handleClick}
            isProcessing={state[0] === "processing"}
            className="btn bg-[#02568a] mt-4 font-bold duration-1000 hover:bg-[#3a87b7]"
          />
        </div>

        {state[0] === "error" && <ErrorToast message={state[1]} />}
        {state[0] === "success" && (
          <SuccessModal
            title="Factura pagada!"
            message={`El pago de la factura Nº${id} fue registrado correctamente.`}
            onClick={() => router.push("/facturas")}
          />
        )}
      </>
    );
  }
}
