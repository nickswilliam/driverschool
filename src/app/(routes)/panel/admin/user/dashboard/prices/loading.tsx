import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4, 5, 6, 7];

const Loading = () => {
  return (
    <div className="self-center w-full max-w-[100%] rounded-md bg-slate-100 px-6 py-4 lg:px-10 lg:py-8 shadow-md flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4  rounded-md py-2 px-3 shadow-md">
        {/* Skeletons to loading */}

        {array1.map((item) => (
          <div className="flex flex-col gap-2" key={item}>
            <Skeleton className="w-1/3 h-4 bg-gray-300/80" />
            <div className="flex gap-4 items-center">
              <Skeleton className="w-full h-8 bg-gray-300/80" />
              <Skeleton className="w-9 h-8 rounded-3xl bg-gray-300/80" />
            </div>
          </div>
        ))}

        <Skeleton className="w-2/3 h-4 bg-gray-300/80" />

        {/* skeletons larges */}
        <div className="col-span-full gap-4 mb-4">
          {array2.map((item) => (
            <div className="flex flex-col gap-2" key={item}>
              <Skeleton className="w-1/3 h-4 bg-gray-300/80" />
              <div className="flex gap-4 items-center mb-3">
                <Skeleton className="w-full h-8 bg-gray-300/80" />
                <Skeleton className="w-9 h-8 rounded-3xl bg-gray-300/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;