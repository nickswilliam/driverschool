import React from "react";
import { Skeleton } from "../ui/skeleton";

export const NotificationsLoading = () => {
    const arrayItems = [1, 2, 3, 4]
  return (
    <>
      {arrayItems.map(item=>(
        <div className="w-full bg-slate-100 shadow-md rounded-sm px-4 py-2 flex flex-col gap-1" key={item}>
        <div className="flex gap-3">
          <Skeleton className="w-24 h-4 bg-gray-300/80" />
          <Skeleton className="w-28 h-4 bg-gray-300/80" />
        </div>
        <hr />

        <div className="flex gap-3">
          <Skeleton className="w-24 h-[14px] bg-gray-300/80" />
          <Skeleton className="w-48 h-[14px] bg-gray-300/80" />
        </div>

        <div className="flex gap-3">
          <Skeleton className="w-24 h-[14px] bg-gray-300/80" />
          <Skeleton className="w-32 h-[14px] bg-gray-300/80" />
        </div>

        {/* contenedor de acciones mail */}
        <div className="w-full flex items-center justify-between mt-4">
          <Skeleton className="w-5 h-5 rounded-md bg-gray-300/80" />
          <Skeleton className="w-32 h-4 rounded-md bg-gray-300/80" />
          <Skeleton className="w-5 h-5 rounded-md bg-gray-300/80" />
        </div>
      </div>
      ))}
    </>
  );
};
