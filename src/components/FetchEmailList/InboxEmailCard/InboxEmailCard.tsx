"use client";
import { IEmailData } from "@/components/NotificationItems/NotificationItems";
import { formatDate } from "@/utils/format-date";
import { translateSection } from "@/utils/translate-section";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { InboxActions } from "./InboxActions";

export const InboxEmailCard = ({
  isReaded,
  name,
  email,
  section,
  createdAt,
  isTrash,
  _id,
}: IEmailData) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full flex flex-col gap-6 px-6">
      <div
        className={`w-full h-12 cursor-pointer flex items-center gap-6 py-2 px-4 bg-slate-100 rounded-md shadow-sm mb-[6px] hover:shadow-lg transition-colors duration-150 text-ellipsis ${
          !isReaded ? "font-bold" : "font-normal bg-slate-200/80"
        }`}
      >
        <Checkbox name="setEmail" onClick={() => setIsChecked((prev) => !prev)} />
        <span className="border-slate-400">{email}</span>
        <span title={translateSection(section)}>
          Seccion: {translateSection(section)}
        </span>
        <span title={formatDate(createdAt)}>
          Recibido: {formatDate(createdAt)}
        </span>

        {isChecked && <InboxActions _id={_id} isReaded={isReaded} isTrash={isTrash}/>}
      </div>
    </div>
  );
};
