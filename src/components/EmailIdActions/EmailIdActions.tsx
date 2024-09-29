"use client";

import Link from "next/link";

import { IoMdArrowBack, IoMdMailUnread, IoMdMailOpen } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { IEmailActions } from "@/app/(routes)/panel/admin/user/dashboard/mails/[id]/page";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export const EmailIdActions = ({
  isReaded,
  isTrash,
  _id,
  isReply,
}: IEmailActions) => {
  const { data: session } = useSession();
  const router = useRouter();
  const toast = useToast();

  const backToInbox = async () => {
    router.push("/panel/admin/user/dashboard/mails/");
    router.refresh();
    if (isReply) {
      await axios.patch(`/api/emails/reply/${_id}`, { isReply });
    }
  };

  const markAsReadOrUnread = async () => {
    if (isReply) {
      router.push(`/panel/admin/user/dashboard/mails/${_id}`);
      router.refresh();
      await axios.patch(`/api/emails/reply/${_id}`, { isReply });
    }
    await axios.patch(`/api/emails/readed/${_id}`, { isReaded });
    router.refresh();
  };

  const deleteMail = async () => {
    try {
      await axios.patch(`/api/emails/trash/${_id}`, { isTrash });
      toast({
        description: "Se envío a la papelera de reciclaje",
        title: "Email eliminado",
        duration: 4500,
        status: "info",
        isClosable: true,
      });

      router.push("/panel/admin/user/dashboard/mails");
    } catch (error) {
      toast({
        description: "Error",
        title: "Ocurrió un error",
        duration: 3500,
        status: "error",
        isClosable: true,
      });
      console.log(error, "Ocurrió un error inesperado");
    }
  };
  return (
    <div className="flex gap-4 p-2">
      <button title="Volver a bandeja de entrada" onClick={backToInbox}>
        <IoMdArrowBack />
      </button>

      <button
        title={isReaded ? "Marcar como no leído" : "Marcar como leído"}
        onClick={markAsReadOrUnread}
      >
        {isReaded ? <IoMdMailUnread /> : <IoMdMailOpen />}
      </button>

      <button
        title={`${
          session?.user.role === "user" ? "No autorizado" : "Eliminar mail"
        }`}
        onClick={deleteMail}
        disabled={session?.user.role === "user"}
        className={`${
          session?.user.role === "user" && "cursor-not-allowed text-gray-400"
        }`}
      >
        <FaRegTrashAlt />
      </button>
    </div>
  );
};
