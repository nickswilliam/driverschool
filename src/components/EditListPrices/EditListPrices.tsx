import { PriceCourses } from "@/types/types";
import { fetchCourseList } from "../FetchListPrices/FetchListPrices";
import { EditListItem } from "./EditListItem";

interface IEditListPrices {
  id: string;
}
export const EditListPrices = async ({ id }: IEditListPrices) => {
  const data: PriceCourses = await fetchCourseList(id);
  return (
    <div className="self-center w-full max-w-[100%] rounded-md bg-slate-100 px-6 py-4 lg:px-10 lg:py-8 shadow-md">
      <h3 className="border-b w-fit py-1 mb-4 border-cyan-700 text-cyan-600">
        🗒 Editando - Metodo de pago:{" "}
        <span className="text-slate-700">{data.paymethod}</span>
      </h3>

      <EditListItem {...data} />
    </div>
  );
};
