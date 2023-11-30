"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";


export default function TransactionForm({ id, first_name, last_name }) {
    const [state, setState] = useState([null]);
    const router = useRouter();

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

    async function handleSubmit(e) {
        e.preventDefault();

        setState(["processing"]);

        const formData = new FormData(e.currentTarget);
        const amount = formData.get('amount');
        const reason = formData.get('reason');

        const supabase = createClientComponentClient();
        const { error } = await supabase.rpc('create_transaction', { destination_user: id, amount: amount, reason: reason });

        if (error) {
            setState(["error", error.message]);
        }
        else {
            setState(["success"]);
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">{`Transferir dinero a ${first_name} ${last_name}`}</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col self-stretch p-6 gap-4 rounded-2xl bg-[#D9D9D9] shadow-xl">
                <input type="number" name="amount" className="h-12 p-4 border-none rounded-lg" placeholder="Ingresa el monto a transferir" />
                <select name="reason" defaultValue="Varios" className="h-12 pl-4 border-none rounded-lg" aria-label="motivo">
                    {motivos.map((motivo, index) => <option key={index} value={motivo}>{motivo}</option>)}
                </select>

                <ProcessingButton defaultText="Transferir" isProcessing={state[0] === "processing"} className="btn bg-[#02568a] mt-4 font-bold duration-1000 hover:bg-[#3a87b7]" />
            </form>

            {state[0] === "error" && <ErrorToast message={state[1]} />}
            {state[0] === "success" && <SuccessModal title="Transferencia enviada!" message={`Tu transferencia fue enviada a ${first_name} ${last_name}.`} onClick={() => router.push(`/home`)} />}
        </>
    );
}