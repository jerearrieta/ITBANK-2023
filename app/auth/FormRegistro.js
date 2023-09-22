"use client"

import { useState } from "react";
import { signUp } from "./actions";
import SignUpSuccessModal from "./SignUpSuccessModal";


export default function FormRegistro({ setInLogin }) {
    const [state, setState] = useState(null);
    const [errors, setErrors] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();

        setState("processing");
        const error = await signUp(new FormData(e.currentTarget));

        if (error) {
            setState("error");
        }
        else {
            setState("success");
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
                        <label className="form-label text-black">Email</label>
                        <input type="email" name="email" className="input max-w-full border-[1px] bg-white border-gray-500" placeholder="Introduzca su email aqui" />
                    </div>
                    <div className="form-field">
                        <label className="form-label text-black">Clave</label>
                        <input type="password" name="password" className="input max-w-full border-[1px] bg-white border-gray-500" placeholder="Introduzca su clave aqui" />
                    </div>
                    <div className="form-field pt-5">
                        <button type="submit" disabled={state === "processing"} className="btn btn-primary w-full">
                            {state === "processing" && (
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                            )}

                            {state === "processing" ? "Procesando..." : "Registrarse"}
                        </button>
                    </div>

                    <div className="form-field">
                        <div className="form-control justify-center">
                            <a className="link link-underline-hover link-primary text-sm" onClick={() => setInLogin(true)}>¿Ya tiene una cuenta? Inicie Sesion.</a>
                        </div>
                    </div>
                </div>


            </form>

            {state === "error" && (
                <div className="alert alert-error">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 26C22.9 26 22 25.1 22 24V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V24C26 25.1 25.1 26 24 26ZM26 34H22V30H26V34Z" fill="#E92C2C" />
                    </svg>
                    <div className="flex flex-col">
                        <span>Ocurrio un error...</span>
                        <span className="text-content2">Credenciales invalidas</span>
                    </div>
                </div>
            )}

            {state === "success" && <SignUpSuccessModal callback={() => setInLogin(true)} />}
        </div>
    );
}