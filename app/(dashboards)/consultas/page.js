"use client";
import React from "react";
import { datos } from "./actions.js";
import { useState, useRef } from "react";

const page = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [msj, setMsj] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");
  const formRef = useRef(null)
  
  const resetForm = () => {
    setNombre("");
    setEmail("");
    setCelular("");
    setMsj("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

      if (nombre === "" || email === "" || celular === "" || msj === "") {
        mostrarMensaje("Por favor, completa todos los campos");
      } else if (!email.includes("@")) {
        mostrarMensaje("El correo electrónico debe contener @");
      } else if (!/^[0-9]+$/.test(celular)) {
        mostrarMensaje("El celular solo puede contener numeros");
      } else {
        const error = datos(new FormData(event.currentTarget));
        resetForm();
        formRef.current.reset();
      }
    };

    const mostrarMensaje = (mensaje) => {
      setErrorMensaje(mensaje);
      setTimeout(function () {
        setErrorMensaje("");
      }, 5000);
  }

  return (
    <>
      <div className="bg-gray-2 rounded-xl p-10 w-full mb-12">
        <h1 className="flex justify-center text-5xl text-white">
          Atencion al cliente
        </h1>
        <p className="flex justify-center pt-5 text-2xl text-white">
          Porfavor completa el formulario con los siguientes datos y recibí una
          atención especializada.
        </p>
      </div>
      <div className="flex justify-center mx-auto">
        <section className="bg-gray-2 rounded-xl w-full">
          <div className="p-8 shadow-lg">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="w-full">
                <label className="sr-only" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  onChange={(e) => setNombre(e.target.value)}
                  name="nombre"
                  className="input input-solid max-w-full"
                  placeholder="Nombre"
                  type="text"
                  id="nombre"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="input input-solid"
                    placeholder="Email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="celular">
                    Celular
                  </label>
                  <input
                    onChange={(e) => setCelular(e.target.value)}
                    name="celular"
                    className="input input-solid"
                    placeholder="Numero de celular"
                    type="tel"
                    id="celular"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="sr-only" htmlFor="mensaje">
                  Message
                </label>

                <textarea
                  onChange={(e) => setMsj(e.target.value)}
                  name="mensaje"
                  className="textarea textarea-solid max-w-full"
                  placeholder="Mensaje"
                  rows="8"
                  id="mensaje"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="rounded-lg btn btn-primary btn-block"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div className="text-red-500 text-2xl mx-auto pt-8">{errorMensaje}</div>
    </>
  );
};

export default page;
