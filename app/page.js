"use client"

import { useState, useEffect } from "react";
import { initFlowbite } from "flowbite";
import dynamic from "next/dynamic";

import Image from "next/image";
import FormLogin from "./auth/FormLogin";
import Footer from "./(dashboards)/components/Footer";

const FormRegistro = dynamic(() => import("./auth/FormRegistro"), {loading: () => <div className="flex w-1/3 p-8 items-center justify-center rounded-2xl bg-gray-300"><div className="spinner-circle" /></div>});


export default function Index() {
  useEffect(() => initFlowbite());

  const [inLogin, setInLogin] = useState(true);

  return (
    <body className="bg-gradient-to-tr from-blue-900 to-slate-700">
      <div className="min-h-screen">
        <header className="h-auto p-12 bg-inherit">
          <Image width={420} height={0} src="/assets/white_logo_title.webp" alt="Guardian Bank" title="Logo Guardian Bank" className="w-auto h-auto mx-auto" priority />
        </header>

        <main className="items-center bg-inherit py-12">
          { inLogin ? <FormLogin setInLogin={setInLogin} /> : <FormRegistro setInLogin={setInLogin} /> }
        </main>
      </div>

      <Footer />
    </body>
  )
}
