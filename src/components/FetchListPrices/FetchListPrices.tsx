import { PriceCourses } from "@/types/types";
import React from "react";
import { FetchListItem } from "./FetchListItem";
import { Refetch } from "../Refetch/Refetch";

export const fetchCourseList = async (id: string) => {
  const res = await fetch(
    `https://driver-school.vercel.app/api/prices/list/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failing to fetch data");
  }

  const data = await res.json();
  return data;
};

interface IListPrices {
  id: string;
}

export const FetchListPrices = async ({ id }: IListPrices) => {
  const data: PriceCourses = await fetchCourseList(id);

  const listCourse = data.courseList;
  return (
    <div className="self-center w-full max-w-[100%] rounded-md bg-slate-100 px-6 py-4 lg:px-10 lg:py-8 shadow-md">
      <div className="flex justify-between flex-wrap items-center w-full mb-4">
        <h3 className="border-b w-fit py-1 mb-4 border-cyan-700 text-cyan-600">
          Metodo de pago:{" "}
          <span className="text-slate-700">{data.paymethod}</span>
        </h3>
        <Refetch />
      </div>
      {listCourse.map((item) => (
        <FetchListItem
          key={item.id}
          courseTitle={item.courseTitle}
          href={item.href as string}
          id={item.id}
          idLink={id as any}
        />
      ))}
    </div>
  );
};
