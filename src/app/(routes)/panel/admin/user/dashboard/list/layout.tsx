import { AllowOrNotToEdit } from "@/components/AllowOrNotToEdit/AllowOrNotToEdit";
import { Metadata } from "next";
import React from "react";
import { CiCircleInfo } from "react-icons/ci";

export const metadata: Metadata = {
  title: "Listas - Precios",
};

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className="flex flex-col w-full h-screen px-5 py-4 md:px-10 md:py-8 gap-8">
      <h2 className="text-cyan-800 font-bold text-lg">
        Listado de precios | Medios de Pago - Configuración ⚙️
      </h2>

      {/* Card principal */}
      <div className="self-center w-full rounded-md bg-slate-100 p-8 shadow-md">
        <AllowOrNotToEdit/>
        <p className="text-xl text-gray-600 flex gap-2 items-start">
          <CiCircleInfo className="text-2xl"/>
          
          <span className="w-[95%]">Desde esta sección podrás manipular y editar el listado de precios y
          sus medios de pagos.
        </span></p>

      </div>


      {/* Display fetch data info of lists */}
      {children}
    </section>
  )
}

export default layout