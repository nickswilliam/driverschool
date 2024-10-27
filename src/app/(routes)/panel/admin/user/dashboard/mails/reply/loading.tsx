import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const LoadingEmails = () => {
  const arrayMap = [1, 2, 3, 4, 5, 6, 7, 8];
  return arrayMap.map((item) => (
    <div className="w-full flex flex-col gap-6" key={item}>
      <div className="w-full h-12 flex items-center gap-6 py-2 px-4 bg-slate-100 rounded-md shadow-sm mb-[6px]">
        <Skeleton className="bg-gray-300/80 w-4 h-4" />
        <Skeleton className="bg-gray-300/80 w-56 h-4" />
        <Skeleton className="bg-gray-300/80 w-32 h-4" />
        <Skeleton className="bg-gray-300/80 w-36 h-4" />
      </div>
    </div>
  ));
};

export default LoadingEmails;
