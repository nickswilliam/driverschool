"use client";

import Link from "next/link";

import { IoMdArrowBack, IoMdMailUnread, IoMdMailOpen } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { IEmailActions } from "@/app/(routes)/panel/admin/user/dashboard/mails/[id]/page";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

export const EmailIdActions = ({ isReaded, isTrash, _id }: IEmailActions) => {
  const router = useRouter();
  const toast = useToast();

  const markAsReadOrUnread = async () => {
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
      <button title="Volver a bandeja de entrada">
        <Link href="/panel/admin/user/dashboard/mails/">
          <IoMdArrowBack />
        </Link>
      </button>

      <button
        title={isReaded ? "Marcar como no leído" : "Marcar como leído"}
        onClick={markAsReadOrUnread}
      >
        {isReaded ? <IoMdMailUnread /> : <IoMdMailOpen />}
      </button>

      <button title="Eliminar mail" onClick={deleteMail}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};
