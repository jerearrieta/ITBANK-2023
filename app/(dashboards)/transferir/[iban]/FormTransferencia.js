"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAPI from "@/app/hooks/useAPI";
import useSWR from "swr";

import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";


export default function TransactionForm({ iban_destino }) {
    const [state, setState] = useState([null]);
    const router = useRouter();
    const api = useAPI();

    const { data: cuentas } = useSWR("cuentas/", api.get);

    const motivos = [
        "Factura",
        "Alquiler",
        "Préstamos",
        "Bienes",
        "Tarjeta de crédito",
        "Educación",
        "Donación benéfica",
        "Impuestos",
        "Viajes",
        "Compras en línea",
        "Varios"
    ];

    async function handleSubmit(formData) {
        setState(["processing"]);

        api.post("movimientos/", {
            cuenta_origen: formData.get('cuenta_origen'),
            cuenta_destino: iban_destino,
            monto: formData.get('monto'),
            tipo_operacion: formData.get('motivo'),
        })
            .then(response => {
                setState(["success"]);
            })
            .catch(response => {
                setState(["error", response.message]);
            });
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Transferencia a la cuenta Nº {iban_destino}</h1>
            
            <form action={handleSubmit} className="flex flex-col self-stretch p-6 gap-4 rounded-2xl bg-[#D9D9D9] shadow-xl">
                <div className="form-field">
                    <label htmlFor="monto_input" className="">Monto de la transferencia</label>
                    <input type="number" id="monto_input" name="monto" className="h-12 p-4 rounded-lg" placeholder="Monto de la transferencia" />
                </div>

                <div className="form-field">
                    <label htmlFor="motivo_select" className="">Motivo de la transferencia</label>
                    <select id="motivo_select" name="motivo" defaultValue="Varios" className="h-12 pl-4 rounded-lg">
                        {motivos.map((motivo, key) => <option key={key} value={motivo}>{motivo}</option>)}
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="cuenta_origen_select" className="">Cuenta desde la que se hara la transferencia</label>
                    <select id="cuenta_origen_select" name="cuenta_origen" className="h-12 pl-4 rounded-lg" required defaultValue="">
                        <option disabled value="">Seleccione la cuenta</option>
                        {cuentas && cuentas.data.map((cuenta, key) => <option key={key} value={cuenta.iban}>{cuenta.iban} | Saldo: {cuenta.saldo}</option>)}
                    </select>
                </div>

                <ProcessingButton defaultText="Transferir" isProcessing={state[0] === "processing"} className="btn bg-[#02568a] mt-4 font-bold duration-1000 hover:bg-[#3a87b7]" />
            </form>

            {state[0] === "error" && <ErrorToast message={state[1]} />}
            {state[0] === "success" && <SuccessModal title="Transferencia enviada!" message={`Tu transferencia fue enviada a ${first_name} ${last_name}.`} onClick={() => router.push(`/home`)} />}
        </>
    );
}