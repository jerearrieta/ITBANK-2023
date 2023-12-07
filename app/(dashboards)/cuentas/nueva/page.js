"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAPI from "@/app/hooks/useAPI";
import useSWR from "swr";

import ProcessingButton from "@/app/components/ProcessingButton";
import SuccessModal from "@/app/components/SuccessModal";
import ErrorToast from "@/app/components/ErrorToast";


export default function FormCrearCuenta() {
    const [state, setState] = useState([null]);
    const router = useRouter();
    const api = useAPI();

    const { data: tiposCuenta } = useSWR("tipos-cuentas/", api.get);

    async function handleSubmit(formData) {
        setState(["processing"]);

        api.post("cuentas/", formData)
            .then(response => setState(["success"]))
            .catch(error => setState(["error", error.response.data.detail]));
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Solicitar una nueva cuenta</h1>
            
            <form action={handleSubmit} className="flex flex-col self-stretch p-6 gap-4 rounded-2xl bg-[#D9D9D9] shadow-xl">
                <div className="form-field">
                    <label htmlFor="tipo_cuenta_select">Tipo de cuenta</label>
                    <select id="tipo_cuenta_select" name="tipo" className="h-12 pl-4 rounded-lg" required defaultValue="">
                        <option disabled value="">Seleccione un tipo de cuenta</option>
                        {tiposCuenta && tiposCuenta.data.map((tipo) => <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>)}
                    </select>
                </div>

                <ProcessingButton defaultText="Confirmar" isProcessing={state[0] === "processing"} className="btn w-1/2 mx-auto mt-4 bg-[#02568a] text-lg font-bold duration-300 hover:bg-[#3a87b7]" />
            </form>

            {state[0] === "error" && <ErrorToast message={state[1]} />}
            {state[0] === "success" && <SuccessModal title="Cuenta creada!" message="Su nueva cuenta fue creada exitosamente." onClick={() => router.push("/home/")} />}
        </>
    );
}