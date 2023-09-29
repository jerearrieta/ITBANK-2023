"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "./actions";

import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";


export default function FormLogin({ setInLogin }) {
    const [state, setState] = useState([null]);
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();

        setState(["processing"]);

        const error = await signIn(new FormData(e.currentTarget));

        if (error) {
            setState(["error", error.message]);
        }
        else {
            setState([null]);
            router.push("/home");
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 p-8 rounded-2xl bg-gray-300">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">Bienvenido a Guardian Bank</h1>
                    <p className="text-sm">Inicia sesion para acceder a su cuenta</p>
                </div>
                <div className="form-group gap-5">
                    <div className="form-field">
                        <label htmlFor="email" className="form-label text-black">Email</label>
                        <input type="email" id="email" name="email" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Introduzca su email aqui" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label text-black">Clave</label>
                        <input type="password" id="password" name="password" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Introduzca su clave aqui" required />
                    </div>
                    <div className="form-field">
                        <div className="form-control justify-between">
                            <div className="flex gap-2">
                                <input type="checkbox" id="default-checkbox" disabled className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdame</label>
                            </div>
                            <label className="form-label">
                                <a className="link link-underline-hover link-primary text-sm" aria-label="¿Olvidaste tu clave?">¿Olvidaste tu clave?</a>
                            </label>
                        </div>
                    </div>
                    <div className="form-field pt-5">
                        <ProcessingButton defaultText="Iniciar Sesion" isProcessing={state[0] === "processing"} className="btn btn-primary w-full" />
                    </div>

                    <div className="form-field">
                        <div className="form-control justify-center">
                            <a className="link link-underline-hover link-primary text-sm" aria-label="¿No tienes una cuenta? Regístrate" onClick={() => setInLogin(false)}>¿No tiene una cuenta? Regístrate.</a>
                        </div>
                    </div>
                </div>
            </form>

            {state[0] === "error" && <ErrorToast message={state[1]} />}
        </div>
    );
}