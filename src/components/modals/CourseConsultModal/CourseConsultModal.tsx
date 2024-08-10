import { ConsultForm } from "@/components/ConsultForm/ConsultForm";
import { AiOutlineClose } from "react-icons/ai";
import { CourseConsultTypes } from "@/types/types";


export const CourseConsultModal = ({ id, title, price, setIsModal }: CourseConsultTypes) => {
  const data = {id, title, price, setIsModal}
  return (
    <div
      className="flex justify-center items-center fixed top-0 left-0 h-screen w-full text-white z-20 px-5"
    >
      <div className="top-12 bg-violet-50/90 w-full max-w-[650px] rounded-md backdrop-blur-sm flex flex-wrap flex-col items-center px-12 py-6 sm:py-10 gap-4 z-50 duration-100">
        <button
          className="self-end"
          onClick={() => setIsModal(false)}
          title="Cerrar"
        >
          <AiOutlineClose className="text-3xl sm:text-4xl text-violet-700 hover:text-violet-500 duration-200" />
        </button>

        <h2 className="text-2xl sm:text-3xl text-violet-500 font-semibold pb-2 px-4 border-b border-violet-500 -mt-6 mb-8">
          Completá tus datos
        </h2>
        <ConsultForm {...data}/>
      </div>

      <div className="w-full h-screen absolute top-0 left-0 bg-slate-900/80 z-30 backdrop-blur-[3px]" onClick={()=> setIsModal(false)}></div>
    </div>
  );
};
