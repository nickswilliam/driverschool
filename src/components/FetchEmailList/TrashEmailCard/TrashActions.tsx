"use client";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { IoMdTrash, IoMdRepeat } from "react-icons/io";

interface ITrashActions {
  _id: string;
}

export const TrashActions = ({ _id }: ITrashActions) => {
  const { data: session } = useSession();
  const toast = useToast();
  const router = useRouter();

  const deletePermanent = async () => {
    try {
      await axios.delete(`/api/emails/delete/${_id}`);
      toast({
        title: "Email eliminado",
        status: "warning",
        description: "Eliminado permanentemente",
        duration: 4500,
        isClosable: true,
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      throw new Error("Ocurrió un error inesperado");
    }
  };

  const restoreEmail = async () => {
    try {
      await axios.patch(`/api/emails/restore/${_id}`);
      toast({
        title: "Email restaurado",
        status: "info",
        description: "Se restauró el email",
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
      title="Eliminar elemento"
    >


      {session?.user.role !== "user" && (<>
        <button onClick={deletePermanent} title="Eliminar mail">
          <IoMdTrash />
        </button>

        <button onClick={restoreEmail} title="Restaurar">
          <IoMdRepeat />
        </button>

        </>
      )}
    </div>
  );
};
