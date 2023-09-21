"use client"

import { useState } from "react";

import FormLogin from "./auth/FormLogin";
import FormRegistro from "./auth/FormRegistro";
import Footer from "./(dashboards)/components/Footer"


export default function Index() {
  const [inLogin, setInLogin] = useState(true);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-blue-900 to-slate-700">
        <header className="p-12">
          <img src="/white_logo_title.png" className="w-[420px] h-auto mx-auto" />
        </header>

        <main className="items-center bg-inherit p-12 px-96">
          { inLogin ? <FormLogin setInLogin={setInLogin} /> : <FormRegistro setInLogin={setInLogin} /> }
        </main>
      </div>

      <Footer />
    </>
  )
}
