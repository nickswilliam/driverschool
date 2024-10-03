"use client";
import { IEmailActions } from "@/app/(routes)/panel/admin/user/dashboard/mails/[id]/page";
import useToggleReply from "@/state/mailReplyState";
import { formatTimeDifference } from "@/utils/timeDiff";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaCircleUser, FaReply } from "react-icons/fa6";

export const EmailIdHeader = ({
  name,
  email,
  _id,
  createdAt,
  isReaded,
  isReply,
}: IEmailActions) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { isReplyMail, toggleReply } = useToggleReply();
  const toast = useToast();

  const replyMail = async () => {
    if (isReply) {
      toast({
        title: "Email ya respondido",
        description: "El email ya fue respondido anteriormente",
        duration: 4500,
        status: "warning",
        isClosable: true,
      });
      return;
    }
    toggleReply();
    if (!isReaded) {
      await axios.patch(`/api/emails/readed/${_id}`, { isReaded });
    }
    router.refresh();
  };

  return (
    <div className="flex justify-between w-full px-2 py-4 border-b border-slate-400 text-ellipsis">
      <div className="flex items-center gap-4 text-ellipsis whitespace-nowrap overflow-hidden">
        <FaCircleUser size={40} className="grow" />

        {/* email emisor data */}
        <div className="flex flex-col gap-1 ">
          <div className="flex gap-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden">
            <span className="font-bold">{name}</span>
            <span className="text-slate-500">{`<${email}>`}</span>
          </div>

          <span>para Mi</span>
        </div>
      </div>

      {/* time ago & reply button */}
      <div className="flex gap-6 items-center whitespace-nowrap">
        <span className="text-sm">{formatTimeDifference(createdAt)}</span>

        <button
          title={`${
            session?.user.role === "user" ? "No autorizado" : "Responder"
          }`}
          disabled={session?.user.role === "user"}
          className={`${
            session?.user.role === "user" && "cursor-not-allowed text-gray-400"
          }`}
          onClick={replyMail}
        >
          <FaReply />
        </button>
      </div>
    </div>
  );
};
