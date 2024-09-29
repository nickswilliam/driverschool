import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { ReplyEmailForm } from "./ReplyEmailForm/ReplyEmailForm";
import { IEmailActions } from "@/app/(routes)/panel/admin/user/dashboard/mails/[id]/page";

const ReplyEmail = (emailInfo: IEmailActions) => {

  return (
    <div className="mt-4 flex gap-6 pl-6 py-8 w-full">
      <FaCircleUser size={40} className="text-indigo-400" />

      <ReplyEmailForm {...emailInfo}/>
    </div>
  );
};

export default ReplyEmail;
