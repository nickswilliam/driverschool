import { EditListPrices } from "@/components/EditListPrices/EditListPrices";
import { useSession } from "next-auth/react";
import { RiUserForbidFill } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

const EditList = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const { id } = params;

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
    <EditListPrices id={id} />
  );
};

export default EditList;
