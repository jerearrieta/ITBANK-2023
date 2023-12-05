"use client"

import { useState } from "react";
import useAPI from "@/app/hooks/useAPI";
import useSWR from "swr";

import ProcessingButton from "@/app/components/ProcessingButton";
import ErrorToast from "@/app/components/ErrorToast";
import SuccessModal from "@/app/components/SuccessModal";


export default function FormRegistro({ setInLogin }) {
    const [state, setState] = useState([null]);
    const api = useAPI(false);

    const { data: tiposCliente } = useSWR('tipos-cliente/', api.get);
    const { data: sucursales } = useSWR('sucursales/', api.get);

    async function handleSubmit(formData) {
        setState(["processing"]);

        api.post("clientes/", formData)
            .then(response => setState(["success"]))
            .catch(error => setState(["error", error.message]))
    }

    return (
        <div className="flex flex-col gap-10 p-8 rounded-2xl bg-gray-300 text-black">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-center">Bienvenido a Guardian Bank</h1>
                <p className="text-sm text-center">Inicia sesion para acceder a su cuenta</p>
            </div>

            <form action={handleSubmit} className="flex flex-col form-group gap-5">
                <div className="form-group gap-5">
                    <div className="form-field">
                        <label htmlFor="username" className="form-label text-black">Nombre de usuario</label>
                        <input type="text" id="username" name="username" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Nombre de usuario" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email" className="form-label text-black">Email</label>
                        <input type="email" id="email" name="email" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Email" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label text-black">Contraseña</label>
                        <input type="password" id="password" name="password" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Contraseña" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="first_name" className="form-label text-black">Nombres</label>
                        <input type="text" id="first_name" name="first_name" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Nombres" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="last_name" className="form-label text-black">Apellidos</label>
                        <input type="text" id="last_name" name="last_name" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Apellidos" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="dni" className="form-label text-black">DNI</label>
                        <input type="text" id="dni" name="dni" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="DNI" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="fecha_nacimiento" className="form-label text-black">Fecha de nacimiento</label>
                        <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" className="input max-w-full border bg-white border-gray-500 text-black" placeholder="Fecha de nacimiento" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="tipo" className="form-label text-black">Tipo de cliente</label>
                        <select id="tipo" name="tipo" className="select max-w-full border bg-white border-gray-500 text-black" required defaultValue="">
                            <option disabled value="">Seleccione el tipo de cliente</option>
                            {tiposCliente && tiposCliente.data.map((tipo) => <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>)}
                        </select>
                    </div>
                    <div className="form-field">
                        <label htmlFor="sucursal" className="form-label text-black">Sucursal</label>
                        <select id="sucursal" name="sucursal" className="select max-w-full border bg-white border-gray-500 text-black" required defaultValue="">
                            <option disabled value="">Seleccione la sucursal</option>
                            {sucursales && sucursales.data.map((sucursal) => <option key={sucursal.id} value={sucursal.id}>{`${sucursal.numero}: ${sucursal.nombre}`}</option>)}
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