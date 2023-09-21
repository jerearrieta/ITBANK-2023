import React from "react";

const page = () => {
  return (
    <>
    <div className="bg-gray-2 rounded-xl p-3 w-full mb-12">
        <h1 className="flex justify-center text-5xl text-white">Atencion al cliente</h1>
        <p className="flex justify-center pt-5 text-2xl text-white">Porfavor completa el formulario con los siguientes datos y recibí atención especializada.</p>
    </div>
      <div className="flex justify-center mx-auto">
        <section className="bg-gray-2 rounded-xl w-full">
          <div className="p-8 shadow-lg">
            <form className="space-y-4">
              <div className="w-full">
                <label className="sr-only" htmlFor="nombre">
                  Nombre
                </label>
                <input
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
                    className="input input-solid"
                    placeholder="Email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="celular">
                    Celular
                  </label>
                  <input
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
                  className="textarea textarea-solid max-w-full"
                  placeholder="Mensaje"
                  rows="8"
                  id="mensaje"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="rounded-lg btn btn-primary btn-block"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
