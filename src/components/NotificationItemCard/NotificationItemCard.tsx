"use client";
import { useState } from "react";
import { IoIosMailUnread, IoIosMailOpen, IoMdTrash } from "react-icons/io";
import { useRouter } from "next/navigation";
import { IEmailData } from "../NotificationItems/NotificationItems";
import { translateSection } from "@/utils/translate-section";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useToast } from "@chakra-ui/react";
import { formatDate } from "@/utils/format-date";

interface NotificationItemsType {
  id: number;
  section: string;
  email: string;
  name: string;
  trashed: boolean;
}

export const NotificationItemCard = ({
  _id,
  email,
  isReaded,
  isTrash,
  name,
  section,
  createdAt
}: IEmailData) => {
  const seccion = translateSection(section);
  const router = useRouter();
  const toast = useToast()
  const {data: session} = useSession();

  const redirectMailItem = async () => {
    if (!isReaded) {
      await axios.patch(`/api/emails/readed/${_id}`, { isReaded });
    }

    router.push(`/panel/admin/user/dashboard/mails/${_id}`);
  };

  const markReadedUnreaded = async () =>
    await axios.patch(`/api/emails/readed/${_id}`, { isReaded });

  const trashEmail = async () => {
    try {
      await axios.patch(`/api/emails/trash/${_id}`, { isTrash });
      toast({
        title: "Email eliminado",
        description: "Se envío a la papelera",
        duration: 4500,
        isClosable: true,
      });
    } catch (error) {
      console.log('Ocurrió un error inesperado', error);
    }
    
  };
  return (
    <div
      className={`cursor-pointer w-full bg-slate-100 shadow-md rounded-sm px-4 py-2 text-cyan-700 flex flex-col gap-1 ${
        isReaded ? "font-normal bg-slate-200/60" : "font-bold"
      }`}
      title="Ver mail"
      onClick={redirectMailItem}
    >
      <h2>
        <span className="uppercase">Seccion: </span>
        {seccion}
      </h2>
      <hr />

      <h3 className="text-[14px] uppercase">
        Remitente:{" "}
        <span className="text-cyan-500 lowercase">
          <a href={`mailto:${email}}`}>{email}</a>
        </span>
      </h3>

      <h3 className="text-[14px] uppercase">
        Usuario: <span className="text-zinc-500">{name}</span>
      </h3>

      {/* contenedor de acciones mail */}
      <div className="w-full flex items-center justify-between mt-4">
        {/* mark as read */}
        <button
          title={isReaded ? "Marcar como no leido" : "Marcar como leido"}
          onClick={markReadedUnreaded}
        >
          {isReaded ? (
            <IoIosMailUnread size={22} />
          ) : (
            <IoIosMailOpen size={20} />
          )}
        </button>

        <span className="text-xs">{formatDate(createdAt)}</span>

        {/* delete email */}
        <button title={`${session?.user.role === "user"? "No autorizado": "Eliminar mail"}`} onClick={trashEmail} className={`${session?.user.role === "user" && "disabled:cursor-not-allowed"}`} disabled={session?.user.role === "user"}>
         <IoMdTrash size={20} className={`${session?.user.role === "user" && "text-zinc-400"}`}/> 
        </button>
      </div>
    </div>
  );
};
