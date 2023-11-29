"use client"

import { useEffect } from "react";
import { initFlowbite } from "flowbite";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


export default function DashboardLayout({ children }) {
  useEffect(() => initFlowbite());

  return (
    <body className="bg-[#F1F1F1]">
      <Header />
      <Sidebar />
      <main className="w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-1/2 mx-auto min-h-screen flex flex-col pt-32 pb-16 text-black">
          {children}
      </main>
      <Footer />
    </body>
  )
}