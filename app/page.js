"use client"

import { useState } from "react";

import Image from "next/image";
import FormLogin from "./auth/FormLogin";
import FormRegistro from "./auth/FormRegistro";
import Footer from "./(dashboards)/components/Footer"


export default function Index() {
  const [inLogin, setInLogin] = useState(true);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-blue-900 to-slate-700">
        <header className="h-auto p-12 bg-inherit">
          <Image width={420} height={0} src="/white_logo_title.png" className="mx-auto" />
        </header>

        <main className="items-center bg-inherit p-12">
          { inLogin ? <FormLogin setInLogin={setInLogin} /> : <FormRegistro setInLogin={setInLogin} /> }
        </main>
      </div>

      <Footer />
    </>
  )
}
