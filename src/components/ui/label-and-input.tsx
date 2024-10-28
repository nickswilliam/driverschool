import React from "react";
import { CustomLabel } from "./custom-label";
import { CustomInput } from "./custom-input";
import { EditDashboard } from "../EditDashboard/EditDashboard";

interface ILabelAndInput {
  title: string;
  value: string | number;
  type: "text"| "number";
  id: number;
}

export const LabelAndInput = ({  title, value, id, type }: ILabelAndInput) => {
  return !value ? null : (
    <div className="flex flex-col gap-2">
      <CustomLabel title={title} />

      {/* container for input to validate roles */}
      <div className="flex w-full gap-2">
        <CustomInput value={value} type={type}/>
        <EditDashboard id={id}/>
      </div>
    </div>
  );
};
