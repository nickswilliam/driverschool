"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ReplyActions } from "./ReplyActions";
import { useRouter } from "next/navigation";
import axios from "axios";
import { formatDate } from "@/utils/format-date";
import { IReplyEmail } from "../FetchEmailReply";

export const ReplyEmailCard = ({
  isReaded,
  createdAt,
  isTrash,
  _id,
  name,
  replyData
}: IReplyEmail) => {
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const openMail = () => {
    router.push(`/panel/admin/user/dashboard/mails/reply/${_id}`);
    router.refresh();

    if (!isReaded) {
      axios.patch(`/api/emails/readed/${_id}`, { isReaded });
    }
  };

  

  return (
    <div className="w-full flex flex-col gap-6">
      <div
        className={`w-full h-auto cursor-pointer py-2 px-4 flex items-start sm:items-center gap-2 bg-slate-100 rounded-md shadow-sm mb-[6px] hover:shadow-lg transition-colors duration-150 text-ellipsis ${
          !isReaded ? "font-bold" : "font-normal bg-slate-200/80"
        }`}
      >
        <Checkbox
          name="setEmail"
          onClick={() => setIsChecked((prev) => !prev)}
        />

        <div
          className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6 text-ellipsis overflow-hidden whitespace-nowrap"
          onClick={openMail}
          title="Leer mail"
        >
          <span className="border-slate-400 text-ellipsis whitespace-nowrap">
            Para: {name}
          </span>

          <span
            title={replyData?.subject}
            className=""
          >
            {replyData?.subject}
          </span>

          <span
            title={replyData?.textEmailArea}
            className=""
          >
            {replyData?.textEmailArea?.slice(0, 10)}...
          </span>

          
          <span title={formatDate(createdAt)} className="text-xs">
            {formatDate(createdAt)}
          </span>
        </div>
        {isChecked && (
          <ReplyActions _id={_id} isReaded={isReaded} isTrash={isTrash} />
        )}
      </div>
    </div>
  );
};
