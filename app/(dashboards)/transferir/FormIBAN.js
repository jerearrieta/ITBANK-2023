"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAPI from "@/app/hooks/useAPI";

import ErrorToast from "@/app/components/ErrorToast";


export default function FormIBAN() {
    const api = useAPI();
    const router = useRouter();
    const [error, setError] = useState(null);

    async function validarIBAN(formData) {
        setError(null);

        const ibanDestino = formData.get("iban");

        api.get(`cuentas/${ibanDestino}/`)
            .then(response => {
                if ("url" in response.data) {
                    setError("No puede ingresar un IBAN perteneciente a una cuenta suya.");
                }
                else {
                    router.push(`/transferir/${ibanDestino}`);
                }
            })
            .catch(error => {
                if (error.response.status === 404) {
                    setError("No se encontró ninguna cuenta con el IBAN ingresado.");
                }
                else {
                    setError("Ocurrió un error inesperado.");
                }
            });
    }

    return (
        <>
            <div className="flex flex-col bg-white rounded-xl">
                <h2 className="px-4 py-3 text-2xl font-semibold">Nueva cuenta</h2>
                <hr />
                <form action={validarIBAN} className="flex flex-col gap-4 p-4">
                    <label htmlFor="iban">Ingrese el IBAN de la cuenta destino</label>
                    <input type="text" id="iban" name="iban" className="rounded-md" placeholder="IBAN" required />
                    <button type="submit" className="self-start px-3 py-2 bg-[#009ee3] text-white rounded-lg font-medium">Confirmar</button>
                </form>
            </div>

            {error && <ErrorToast message={error} />}
        </>
    );
}