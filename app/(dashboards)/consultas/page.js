import React from "react";
import "./style.css";
import { BiPhoneCall } from "react-icons/bi";
import { GrSend } from "react-icons/gr";
import { PiWarehouseDuotone } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";

const page = () => {
  return (
    <>
      <main className="main-consultas min-h-screen">
        <div className="bg-zinc-600 flex flex-col justify-center h-52">
          <h1 className="flex justify-center items-center text-white text-4xl pb-3">
            Atención al cliente
          </h1>
          <p className="flex justify-center items-center text-white text-lg">
            Recibí atención especializada por medio de nuestros canales de
            contacto
          </p>
        </div>
        <div className="flex flex-col justify-center h-52 bg-zinc-300">
          <h2 className="flex justify-center items-center text-4xl pb-3">
            Lineas Guardian
          </h2>
          <p className="flex justify-center items-center text-lg">
            Línea Guardian / 0800-111-222 - Línea Guardian Premium /
            0800-666-222{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center h-52">
          <h3 className="flex justify-center items-center text-4xl pb-3">
            Nuestros canales de contacto
          </h3>
          <div className="flex justify-evenly">
            <div>
              <GrSend />
            </div>
            <div>
              <BiPhoneCall />
            </div>
            <div>
              <PiWarehouseDuotone />
            </div>
            <div>
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
