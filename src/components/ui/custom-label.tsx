import React from "react";

interface ICustomLabel {
  title: string;
}

export const CustomLabel = ({ title }: ICustomLabel) => {
  return <label className="text-cyan-700">{title}</label>;
};
