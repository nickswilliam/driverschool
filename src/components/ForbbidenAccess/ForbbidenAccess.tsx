import { RiUserForbidFill } from "react-icons/ri";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

export const ForbbidenAccess = () => {
  return (
    <div className="mx-auto mt-8 flex flex-col gap-6 items-center justify-center w-fit self-center py-4 px-6 rounded-md shadow-md bg-slate-100/80">
      <h2 className="text-2xl font-bold">ALTO</h2>
      <RiUserForbidFill size={100} className="text-slate-300/60" />
      <p>Acceso denegado | No posee los permisos necesarios para navegar en esta seccion.</p>

      <Link
        href="/panel/admin/user/dashboard/mails"
        className="flex items-center gap-2 rounded-md px-6 py-2 text-xl bg-cyan-800 text-white uppercase"
      >
        Ir a Emails
        <TbArrowBackUp />
      </Link>
    </div>
  )
}
