"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { modifyCardLimit } from "./action";

import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";


export default function CardEdit({ id, limit }) {
    const [state, setState] = useState([null]);
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();

        setState(["processing"]);

        const formData = new FormData(e.currentTarget);
        const limit = formData.get('limit');

        const error = await modifyCardLimit(id, limit);

        if (error) {
            setState(["error", error.message]);
        }
        else {
            setState(["success"]);
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold pb-4">{`Modificar limite de la tarjeta`}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col self-stretch p-6 gap-4 rounded-2xl bg-[#D9D9D9] shadow-xl">
                <input type="number" name="limit" defaultValue={limit} className="h-12 p-4 border-none rounded-lg" placeholder="Ingresa el limite de la tarjeta" />
                <ProcessingButton defaultText="Confirmar cambios" isProcessing={state[0] === "processing"} className="btn" />
            </form>

            {state[0] === "error" && <ErrorToast message={state[1]} />}
            {state[0] === "success" && <SuccessModal title="Cambios aplicados!" message="El limite de su tarjeta se actualizó correctamente." onClick={() => router.push(`/tarjetas/${id}`)} />}
        </>
    );
}