"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAPI from "@/app/hooks/useAPI";
import useSWR from "swr";
import { obtenerStringDineroDecimal, obtenerDineroEntero } from "@/app/utils/dinero";

import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";


export default function FormularioPrestamos() {
    const [state, setState] = useState([null]);
    const router = useRouter();
    const api = useAPI();

    const { data: cuentas } = useSWR("cuentas/", api.get);

    const tipos_prestamo = [
        "Personal",
        "Prendario",
        "Hipotecario",
    ];

    async function handleSubmit(formData) {
        setState(["processing"]);

        api.post("prestamos/", {
            cuenta: formData.get('cuenta'),
            monto: obtenerDineroEntero(formData.get('monto')),
            tipo: formData.get('tipo')
        })
            .then(response => {
                setState(["success"]);
            })
            .catch(error => {
                setState(["error", error.response.data.detail]);
            });
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Pedir un prestamo</h1>
            
            <form action={handleSubmit} className="flex flex-col self-stretch p-6 gap-4 rounded-2xl bg-[#D9D9D9] shadow-xl">
                <div className="form-field">
                    <label htmlFor="monto_input">Monto del prestamo</label>
                    <input type="number" id="monto_input" name="monto" className="h-12 p-4 rounded-lg" placeholder="Monto del prestamo" required min={1} />
                </div>

                <div className="form-field">
                    <label htmlFor="tipo_select">Tipo de prestamo</label>
                    <select id="tipo_select" name="tipo" defaultValue="Personal" className="h-12 pl-4 rounded-lg">
                        {tipos_prestamo.map((motivo, key) => <option key={key} value={motivo}>{motivo}</option>)}
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="cuenta_select">Cuenta a la cual se acreditara el prestamo</label>
                    <select id="cuenta_select" name="cuenta" className="h-12 pl-4 rounded-lg" required defaultValue="">
                        <option disabled value="">Seleccione una cuenta</option>
                        {cuentas && cuentas.data.map((cuenta, key) => <option key={key} value={cuenta.iban}>{cuenta.iban} | Saldo: {obtenerStringDineroDecimal(cuenta.saldo)}</option>)}
                    </select>
                </div>

                <ProcessingButton defaultText="Confirmar" isProcessing={state[0] === "processing"} className="btn w-1/2 mx-auto mt-4 bg-[#02568a] text-lg font-bold duration-300 hover:bg-[#3a87b7]" />
            </form>

            {state[0] === "error" && <ErrorToast message={state[1]} />}
            {state[0] === "success" && <SuccessModal title="Prestamo registado!" message="Su prestamo fue registrado correctamente." onClick={() => router.push("/home/")} />}
        </>
    );
}
