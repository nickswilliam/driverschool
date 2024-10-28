import { ICoursesPrices } from "@/models/CoursesPrices";
import React from "react";
import CoursesCards from "../CoursesCards/CoursesCards";

const fetchCoursesPrices = async () => {
  const res = await fetch("https://driverschool-two.vercel.app/api/prices/", {
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failing to fetch data")
  }

  const data = await res.json()

  return data
};

export const FetchCoursePrices = async () => {
 const coursesPrices: ICoursesPrices[] = await fetchCoursesPrices()

  return <div className="self-center mt-6 w-full max-w-7xl px-10 pt-10 pb-16 flex justify-center flex-wrap gap-4">
    {coursesPrices.map((item)=>(
        <CoursesCards {...item} key={item.id}/>
    ))}

  </div>
};
