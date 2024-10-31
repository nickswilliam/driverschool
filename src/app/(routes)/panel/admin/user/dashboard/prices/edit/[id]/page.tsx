import { authOptions } from "@/lib/auth-options-backup";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { RiUserForbidFill } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import { EditCoursesPrices as EditCourses } from "@/components/EditCoursesPrices/EditCoursesPrices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editando | Cursos y Precios",
};

const EditCoursesPrices = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  return session?.user.role !== "admin" ? (
    <div className="flex flex-col gap-6 items-center  justify-center w-fit self-center py-4 px-6 rounded-md shadow-md bg-slate-100/80">
      <h2 className="text-2xl font-bold">ALTO</h2>
      <RiUserForbidFill size={100} className="text-slate-300/60" />
      <p>Usuario no autorizado para editar.</p>

      <Link
        href="/panel/admin/user/dashboard"
        className="flex items-center gap-2 rounded-md px-6 py-2 text-xl bg-cyan-800 text-white uppercase"
      >
        Regresar
        <TbArrowBackUp />
      </Link>
    </div>
  ) : (
    <EditCourses params={params}/>
  );
};

export default EditCoursesPrices;
