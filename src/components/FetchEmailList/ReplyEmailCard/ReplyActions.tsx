"use client";
import React from "react";
import { IoMdMailOpen, IoMdMailUnread } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface IInboxActions {
  _id: string;
  isReaded: boolean;
  isTrash: boolean;
}

export const ReplyActions = ({ isReaded, _id, isTrash }: IInboxActions) => {
  const { data: session } = useSession();
  const toast = useToast();
  const router = useRouter();
  const setReadAndUnread = async () => {
    try {
      await axios.patch(`/api/emails/readed/${_id}`, { isReaded });
      router.refresh();
    } catch (error) {
      console.log(error);
      throw new Error("Ocurrió un error inesperado");
    }
  };

  const trashEmail = async () => {
    try {
      await axios.patch(`/api/emails/trash/${_id}`, { isTrash });
      toast({
        title: "Email eliminado",
        description: "Se envío a la papelera",
        duration: 4500,
        isClosable: true,
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      throw new Error("Ocurrió un error inesperado");
    }
  };
  return (
    <div
      className="flex items-center gap-3 rounded-md border shadow-sm py-2 px-2 bg-cyan-400"
      title={`${isReaded ? "Marcar como no leido" : "Marcar como leído"}`}
    >
      <button className="flex items-center" onClick={setReadAndUnread}>
        {isReaded ? <IoMdMailUnread /> : <IoMdMailOpen />}
      </button>

      {session?.user.role !== "user" && (
        <button onClick={trashEmail} title="Eliminar mail">
          <FaTrash />
        </button>
      )}
    </div>
  );
};
