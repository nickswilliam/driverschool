import { PriceCourses } from "@/types/types";
import React from "react";
import LinksToPay from "../LinksToPay/LinksToPay";

const fetchCoursesList = async () => {
  const res = await fetch(
    "https://driverschool-two.vercel.app/api/prices/list/2",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failing to fetching data");
  }

  const data = await res.json();

  return data;
};
const FetchLinksPay = async () => {
  const data: PriceCourses = await fetchCoursesList();
  const filterData = data.courseList

  return (
    <div className="max-w-5xl flex flex-col gap-4">
      {filterData?.map((course) => (
        <LinksToPay
          href={course.href as string}
          key={course.id}
          title={course.courseTitle}
        />
      ))}
    </div>
  );
};

export default FetchLinksPay;
