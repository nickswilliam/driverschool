"use client";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { ReplyEmailForm } from "./ReplyEmailForm/ReplyEmailForm";
import { IEmailActions } from "@/app/(routes)/panel/admin/user/dashboard/mails/[id]/page";
import useToggleReply from "@/state/mailReplyState";

const ReplyEmail = (emailInfo: IEmailActions) => {
  const { isReplyMail } = useToggleReply();

  return (
    isReplyMail && (
      <div className="mt-4 flex flex-col sm:flex-row gap-6 sm:pl-6 py-8 w-full">
        <FaCircleUser size={40} className="text-indigo-400" />

        <ReplyEmailForm {...emailInfo} />
      </div>
    )
  );
};

export default ReplyEmail;
