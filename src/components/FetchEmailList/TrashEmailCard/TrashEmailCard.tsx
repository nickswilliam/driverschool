"use client";
import { IEmailData } from "@/components/NotificationItems/NotificationItems";
import { formatDate } from "@/utils/format-date";
import { translateSection } from "@/utils/translate-section";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { TrashActions } from "./TrashActions";

export const TrashEmailCard = ({
  email,
  section,
  updatedAt,
  _id,
}: IEmailData) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full flex flex-col gap-6 px-6">
      <div
        className={`w-full h-auto cursor-pointer flex items-start sm:items-center gap-2 py-2 px-4 bg-slate-100 rounded-md shadow-sm mb-[6px] hover:shadow-lg transition-colors duration-150 text-ellipsis font-normal`}
      >
        <Checkbox
          name="setEmail"
          onClick={() => setIsChecked((prev) => !prev)}
        />

        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6 text-ellipsis overflow-hidden whitespace-nowrap">
        <span className="border-slate-400">{email}</span>
        <span title={translateSection(section)}>
          Seccion: {translateSection(section)}
        </span>
        <span title={formatDate(updatedAt)}>
          Eliminado: {formatDate(updatedAt)}
        </span>

        </div>

        {isChecked && <TrashActions _id={_id} />}
      </div>
    </div>
  );
};
