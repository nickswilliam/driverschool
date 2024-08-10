import { disableInstantTransitions } from "framer-motion";
import React from "react";

type SelectTypes = {
  children: React.ReactNode;
  handleChange: (e: any) => void;
  defaultValue?: string;
};

type SelectItem = {
  value: string;
  disabled?: boolean;
};

type SelectFirst = {
  placeholder: string;
};

export const Select = ({ children, handleChange, defaultValue }: SelectTypes) => {
  return (
    <select
      defaultValue={defaultValue}
      className="w-full border border-pink-600 rounded-md bg-transparent px-4 py-2 focus:shadow-md focus:shadow-pink-600 focus:border focus:border-pink-600 outline-none"
      onChange={handleChange}
    >
      {children}
    </select>
  );
};

export const SelectItem = ({ value, disabled }: SelectItem) => {
  return (
    <option
      value={value}
      className="bg-violet-200 border-pink-600 border"
      disabled={disabled}
    >
      {value}
    </option>
  );
};

export const SelectFirst = ({ placeholder }: SelectFirst) => {
  return (
    <option
      value=""
      className="bg-violet-200 italic text-gray-800 disabled:bg-violet-200"
      disabled
      selected
    >
      {placeholder}
    </option>
  );
};
