"use client";

import { ICoursesPrices } from "@/models/CoursesPrices";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { MdEdit } from "react-icons/md";
import { LabelAndInputCourses } from "../ui/label-input-courses";

export const FetchCoursesItem = (data: ICoursesPrices) => {
  const { data: session } = useSession();
  const router = useRouter();

  const editItem = () => {
    router.push(`/panel/admin/user/dashboard/prices/edit/${data.id}`);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 border rounded-md py-2 px-3 shadow-md">
      <LabelAndInputCourses id={data.id} value={data.id} title="Identificador" type="number"/>

      <LabelAndInputCourses id={data.id} value={data.title} title="Curso" type="text"/>

      <LabelAndInputCourses id={data.id} value={data.price} title="Precio" type="number"/>

      <LabelAndInputCourses id={data.id} value={data.btnText} title="Botón" type="text"/>

      <ul className="col-span-full gap-4 mb-4">
        <span className="text-cyan-700">Caracteristicas de curso:</span>
        {data.listItems.map(item=>(
            <LabelAndInputCourses key={item.id} id={data.id} value={item.item} title="" type="text"/>
        ))}
      </ul>
    </div>
  );
};