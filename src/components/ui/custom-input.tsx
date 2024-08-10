import React from 'react'

interface ICustomInput {
    value: string | number;
    disabled?: unknown,
    type: "text" | "number"
}

export const CustomInput = ({value, disabled, type}: ICustomInput) => {
  return (
    <input className="py-2 px-1 outline-none border-b border-slate-400 w-full text-md" type={type} value={value} disabled />
  )
}
