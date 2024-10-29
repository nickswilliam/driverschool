import React from "react";
import { FetchCoursesItem } from "./FetchCoursesItem";
import { Refetch } from "../Refetch/Refetch";
import { ICoursesPrices } from "@/models/CoursesPrices";

export const fetchCoursePrices = async () => {
  const res = await fetch("https://driverschool-two.vercel.app/api/prices/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failing to fetch data");
  }

  const data = await res.json();

  return data;
};

export const FetchCourses = async () => {
  const coursePrices: ICoursesPrices[] = await fetchCoursePrices();
  return (
    <div className="self-center w-full max-w-[100%] rounded-md bg-slate-100 px-6 py-4 lg:px-10 lg:py-8 shadow-md">
      <div className="self-end mb-4">
        <Refetch />
      </div>


      {coursePrices.map(item=>(
        <FetchCoursesItem key={item.id} {...item}/>
      ))}
    </div>
  );
};
