import { IEmailActions } from "@/app/(routes)/panel/admin/user/dashboard/mails/[id]/page";
import { formatDate } from "@/utils/format-date";
import { FaCircleUser, FaReply } from "react-icons/fa6";

export const EmailIdHeader = ({
  name,
  email,
  _id,
  createdAt,
}: IEmailActions) => {
  return (
    <div className="flex justify-between w-full px-2 py-4 border-b border-slate-400">
      <div className="flex items-center gap-4">
        <FaCircleUser size={40} />

        {/* email emisor data */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 text-sm">
            <span className="font-bold">{name}</span>
            <span className="text-slate-500">{`<${email}>`}</span>
          </div>

          <span>para Mi</span>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <span className="text-sm">{formatDate(createdAt)}</span>

        <button title="Responder mail">
            <FaReply/>
        </button>
      </div>
    </div>
  );
};
