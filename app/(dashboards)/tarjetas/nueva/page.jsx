"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAPI from "@/app/hooks/useAPI";
import useSWR from "swr";

import ProcessingButton from "@/app/components/ProcessingButton";
import SuccessModal from "@/app/components/SuccessModal";
import ErrorToast from "@/app/components/ErrorToast";


export default function CrearTarjetaForm() {
    const [state, setState] = useState([null]);
    const router = useRouter();
    const api = useAPI();

    const { data: marcasTarjetas } = useSWR("marcas-tarjetas/", api.get);

    const tiposTarjetas = [
        ["DEBITO", "Debito"],
        ["CREDITO", "Credito"],
    ];

    async function handleSubmit(formData) {
        setState(["processing"]);

        api.post("tarjetas/", formData)
            .then(response => setState(["success"]))
            .catch(error => setState(["error", error.response.data.detail]));
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Solicitar una nueva tarjeta</h1>
            
            <form action={handleSubmit} className="flex flex-col self-stretch p-6 gap-4 rounded-2xl bg-[#D9D9D9] shadow-xl">
                <div className="form-field">
                    <label htmlFor="tipo_tarjeta_select">Tipo de tarjeta</label>
                    <select id="tipo_tarjeta_select" name="tipo" className="h-12 pl-4 rounded-lg" required defaultValue="">
                        <option disabled value="">Seleccione un tipo de tarjeta</option>
                        {tiposTarjetas && tiposTarjetas.map((tipo, key) => <option key={key} value={tipo[0]}>{tipo[1]}</option>)}
                    </select>

                    <label htmlFor="marca_tarjeta_select">Marca de la tarjeta</label>
                    <select id="marca_tarjeta_select" name="marca" className="h-12 pl-4 rounded-lg" required defaultValue="">
                        <option disabled value="">Seleccione la marca de la tarjeta</option>
                        {marcasTarjetas && marcasTarjetas.data.map((marca) => <option key={marca.id} value={marca.id}>{marca.nombre}</option>)}
                    </select>
                </div>

                <ProcessingButton defaultText="Confirmar" isProcessing={state[0] === "processing"} className="btn w-1/2 mx-auto mt-4 bg-[#02568a] text-lg font-bold duration-300 hover:bg-[#3a87b7]" />
            </form>

            {state[0] === "error" && <ErrorToast message={state[1]} />}
            {state[0] === "success" && <SuccessModal title="Tarjeta creada!" message="Su tarjeta fue creada exitosamente." onClick={() => router.push("/tarjetas/")} />}
        </>
    );
}