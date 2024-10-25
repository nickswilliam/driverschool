"use client";
import { IEmailActions } from "@/app/(routes)/panel/admin/user/dashboard/mails/[id]/page";
import { formatTimeDifference } from "@/utils/timeDiff";
import { FaCircleUser,  } from "react-icons/fa6";

export const ReplyEmailIdHeader = ({
  name,
  email,
  createdAt,

}: IEmailActions) => {

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
      </div>
    </div>
  );
};
