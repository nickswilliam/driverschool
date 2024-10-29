import { EditCoursesPricesItem } from "./EditCoursesPricesItem";
import { fetchCoursePrices } from "../FetchCourses/FetchCourses";
import { ICoursesPrices } from "@/models/CoursesPrices";

const fetchCoursesId = async (id: string) => {
  const res = await fetch(`https://driverschool-two.vercel.app/api/prices/${id}`)

  if(!res.ok){
    throw new Error('Failing to fetch data')
  }

  const data = await res.json()

  return data
};

export const EditCoursesPrices = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const data: ICoursesPrices = await fetchCoursesId(id);
  return (
    <div className="self-center w-full max-w-[100%] rounded-md bg-slate-100 px-6 py-4 lg:px-10 lg:py-8 shadow-md">
      <h3 className="border-b w-fit py-1 mb-4 border-cyan-700 text-cyan-600">
        🗒 Editando - Cursos y precios
      </h3>

      <EditCoursesPricesItem {...data} />
    </div>
  );
};
