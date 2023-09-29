"use client"

import { useState } from "react";
import { signUp } from "./actions";

import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";


export default function FormRegistro({ setInLogin }) {
    const [state, setState] = useState([null]);

    async function handleSubmit(e) {
        e.preventDefault();

        setState(["processing"]);

        const error = await signUp(new FormData(e.currentTarget));

        if (error) {
            setState(["error", error.message]);
        }
        else {
            setState(["success"]);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 p-8 rounded-2xl bg-gray-300">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold text-center">Bienvenido a Guardian Bank</h1>
                    <p className="text-sm text-center">Inicia sesion para acceder a su cuenta</p>
                </div>
                <div className="form-group gap-5">
                    <div className="form-field">
                        <label htmlFor="email" className="form-label text-black">Email</label>
                        <input type="email" id="email" name="email" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Email" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label text-black">Clave</label>
                        <input type="password" id="password" name="password" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Clave" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="dni" className="form-label text-black">DNI</label>
                        <input type="text" id="dni" name="dni" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="DNI" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="first_name" className="form-label text-black">Nombre</label>
                        <input type="text" id="first_name" name="first_name" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Nombre" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="last_name" className="form-label text-black">Apellido</label>
                        <input type="text" id="last_name" name="last_name" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Apellido" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="birth" className="form-label text-black">Fecha de nacimiento</label>
                        <input type="date" id="birth" name="birth" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Fecha de nacimiento" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="sex" className="form-label text-black">Sexo</label>
                        <select id="sex" name="sex" className="select max-w-full border bg-white border-gray-500 text-black" required defaultValue="">
                            <option disabled value="">Sexo</option>
                            <option value="M">Hombre</option>
                            <option value="F">Mujer</option>
                        </select>
                    </div>
                    <div className="form-field pt-5">
                        <ProcessingButton defaultText="Registrarse" isProcessing={state[0] === "processing"} className="btn btn-primary w-full" />
                    </div>

                    <div className="form-field">
                        <div className="form-control justify-center">
                            <a className="link link-underline-hover link-primary text-center text-sm" aria-label="¿Ya tienes una cuenta? Inicie sesión." onClick={() => setInLogin(true)}>¿Ya tiene una cuenta? Inicie Sesión.</a>
                        </div>
                    </div>
                </div>
            </form>

            {state[0] === "error" && <ErrorToast message={state[1]} />}
            {state[0] === "success" && <SuccessModal title="Se ha registrado exitosamente!" message="Ahora puede iniciar sesion para acceder a su cuenta." onClick={() => setInLogin(true)} />}
        </div>
    );
}