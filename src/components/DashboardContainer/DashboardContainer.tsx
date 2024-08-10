import React from "react";

export const DashboardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {children}
    </div>
  );
};
