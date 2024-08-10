import Link from "next/link";
import React from "react";
import { BsSignStopFill } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/tb";

const page = () => {
  return (
    <div className="flex flex-col gap-6 items-center  justify-center w-fit self-center py-4 px-6 rounded-md shadow-md bg-slate-100/80">
      <h2 className="text-2xl font-bold">ALTO</h2>
      <BsSignStopFill size={100} className="text-red-600"/>
      <p>Esta sección no está disponible para navegar.</p>

     
      <Link href='/panel/admin/user/dashboard' className="flex items-center gap-2 rounded-md px-6 py-2 text-xl bg-cyan-800 text-white uppercase">
      Regresar
      <TbArrowBackUp/>
      </Link>
    </div>
  );
};

export default page;
