"use client";
import { DLCsDocumentsListType } from "@/types/types";
import { FaBook, FaList, FaMinusCircle } from "react-icons/fa";

export const DownloadDocs = ({
  id,
  title,
  description,
  url,
  fileName,
}: DLCsDocumentsListType) => {
  const downloadDocument = () => {
    const urlDoc = url;
    const link = document.createElement("a");

    link.href = urlDoc;
    link.target = "_blank";
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="cursor-pointer flex flex-col gap-6 text-center items-center justify-center bg-violet-200 border border-violet-300 w-full sm:max-w-[300px] h-60 sm:h-72 py-6 px-4 rounded-md shadow-xl hover:shawdow-2xl hover:shadow-violet-500 duration-200 ease-in"
      title={`Descargar: ${title}`}
      onClick={downloadDocument}
      data-aos={`${id % 2 === 0 ? "flip-left" : "flip-right"}`}
      data-aos-duration="800"
    >
      {/* container icons */}
      <div className="text-xl sm:text-2xl p-4 bg-violet-400 rounded-md text-violet-100">
        {id === 1 ? <FaBook /> : id === 2 ? <FaList /> : <FaMinusCircle />}
      </div>

      <h2 className="text-lg font-semibold text-gray-600">{title}</h2>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  );
};
