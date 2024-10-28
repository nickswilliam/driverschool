"use client";
import { MdEdit } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface IEditDashboard {
    id: number
}

export const EditDashboardCourses = ({id}: IEditDashboard) => {
  const { data: session } = useSession();

  const router = useRouter();
  const editItem = ()=> {
    router.push(`/panel/admin/user/dashboard/prices/edit/${id}`)
  }

  return session?.user.role === "admin" ? (
    <button className="rounded-full h-9 w-10 flex items-center justify-center border border-slate-800 hover:bg-slate-300/60 transition-colors duration-150" onClick={editItem} title="Editar contenido">
      <MdEdit/>
    </button>
  ) : (
    <button className="rounded-full h-9 w-10 flex items-center justify-center border border-slate-300 bg-slate-300 text-slate-500 cursor-not-allowed" title="No autorizado para editar">
      <MdEdit />
    </button>
  );
};
