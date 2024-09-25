import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingEmailId = () => {
  return (
    <section className="w-full h-screen py-8 px-6">
      <div className="px-6 py-4 flex flex-col gap-3 bg-slate-100 rounded-md shadow-md">
        {/* Email actions */}
        <div className="flex gap-4 p-2">
          <Skeleton className="h-6 w-6 bg-gray-300/80" />
          <Skeleton className="h-6 w-6 bg-gray-300/80" />
          <Skeleton className="h-6 w-6 bg-gray-300/80" />
        </div>

        {/* Section received */}
        <Skeleton className="h-4 w-14 bg-gray-300/80 rounded-sm" />

        {/* Avatar mail icon - reply & more */}
        <div className="flex justify-between w-full px-2 py-4 border-b border-slate-400 text-ellipsis">
          <div className="flex items-center gap-4 text-ellipsis whitespace-nowrap overflow-hidden">
            <Skeleton className="h-12 w-12 bg-gray-300/80 rounded-full" />
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden">
                <Skeleton className="h-4 w-28 bg-gray-300/80" />
                <Skeleton className="h-4 w-32 bg-gray-300/80" />
              </div>

              <Skeleton className="h-4 w-10 bg-gray-300/80" />
            </div>
          </div>

          <div className="flex gap-6 items-center whitespace-nowrap">
            <Skeleton className="h-6 w-6 bg-gray-300/80" />
            <Skeleton className="h-6 w-6 bg-gray-300/80" />
          </div>
        </div>

        {/* Email Data */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Skeleton className="h-4 w-20 bg-gray-300/80" />
            <Skeleton className="h-4 w-28 bg-gray-300/80" />
          </div>

          <div className="flex gap-1">
            <Skeleton className="h-4 w-16 bg-gray-300/80" />
            <Skeleton className="h-4 w-24 bg-gray-300/80" />
          </div>

          <Skeleton className="h-8 w-[220px] bg-gray-300/80" />

          <div className="flex gap-1">
            <Skeleton className="h-4 w-20 bg-gray-300/80" />
            <Skeleton className="h-4 w-32 bg-gray-300/80" />
          </div>
          <div className="flex gap-1">
            <Skeleton className="h-4 w-20 bg-gray-300/80" />
            <Skeleton className="h-4 w-32 bg-gray-300/80" />
          </div>

          <div className="flex gap-1">
            <Skeleton className="h-4 w-20 bg-gray-300/80" />
            <Skeleton className="h-4 w-32 bg-gray-300/80" />
          </div>
          <div className="flex gap-1">
            <Skeleton className="h-4 w-20 bg-gray-300/80" />
            <Skeleton className="h-4 w-32 bg-gray-300/80" />
          </div>
        </div>

        <Skeleton className="h-4 w-16 bg-gray-300/80 self-end" />
      </div>
    </section>
  );
};

export default LoadingEmailId;
