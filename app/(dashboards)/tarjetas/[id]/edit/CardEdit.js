"use client"

import { useState } from "react";
import { modifyCardLimit } from "./action";

import ProcessingButton from "@/app/(dashboards)/components/ProcessingButton";


export default function CardEdit({ id, limit }) {
    const [state, setState] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        setState("processing");

        const formData = new FormData(e.currentTarget);
        const limit = formData.get('limit');

        const error = await modifyCardLimit(id, limit);

        if (error) {
            setState("error");
        }
        else {
            setState("success");
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold pb-4">{`Modificar limite de la tarjeta`}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col self-stretch p-6 gap-4 rounded-2xl bg-[#D9D9D9] shadow-xl">
                <input type="number" name="limit" defaultValue={limit} className="h-12 p-4 border-none rounded-lg" placeholder="Ingresa el limite de la tarjeta" />
                <ProcessingButton defaultText="Confirmar cambios" isProcessing={state === "processing"} className="btn" />
            </form>
        </>
    );
}