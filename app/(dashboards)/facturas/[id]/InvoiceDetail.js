"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAPI from "@/app/hooks/useAPI";
import useSWR from "swr";
import { obtenerStringDineroDecimal } from "@/app/utils/dinero";

import Link from "next/link";
import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";


export default function InvoiceDetail({ id, emisor, monto, pdf }) {
  const [state, setState] = useState([null]);
  const router = useRouter();
  const api = useAPI();

  const { data: cuentas } = useSWR("cuentas/", api.get);

  async function handleSubmit(formData) {
    setState(["processing"]);

    api.put(`facturas/${id}/`, formData)
      .then(response => setState(["success"]))
      .catch(error => setState(["error", error.message]));
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">Datos de la factura</h1>
        <hr className="border-gray-400" />
      </div>

      <div className="flex flex-col gap-4 p-4 text-lg bg-white rounded-xl shadow-lg">
        <p>Emisor: {emisor}</p>
        <p>Total a pagar: {obtenerStringDineroDecimal(monto)}</p>
        <Link href={pdf} target="_blank" className="btn w-1/2 mx-auto bg-[#02568a] text-lg font-medium duration-300 hover:bg-[#3a87b7]">Ver factura</Link>
      </div>

      <form action={handleSubmit} className="flex flex-col bg-white rounded-xl shadow-lg">
        <h2 className="px-4 py-3 text-2xl font-semibold">Pagar factura</h2>
        <hr />
        <div className="form-field px-4 py-3">
          <label htmlFor="cuenta_select">Cuenta de la cual se pagará la factura</label>
          <select id="cuenta_select" name="cuenta" className="h-12 pl-4 rounded-lg" required defaultValue="">
            <option disabled value="">Seleccione una cuenta</option>
            {cuentas && cuentas.data.map((cuenta, key) => <option key={key} value={cuenta.iban}>{cuenta.iban} | Saldo: {obtenerStringDineroDecimal(cuenta.saldo)}</option>)}
          </select>

          <ProcessingButton defaultText="Confirmar" isProcessing={state[0] === "processing"} className="btn w-1/2 mx-auto mt-4 bg-[#02568a] text-lg font-medium duration-300 hover:bg-[#3a87b7]" />
        </div>
      </form>

      {state[0] === "error" && <ErrorToast message={state[1]} />}
      {state[0] === "success" && <SuccessModal title="Factura pagada!" message={`El pago de la factura fue registrado correctamente.`} onClick={() => router.push("/facturas")} />}
    </div>

  );
}
