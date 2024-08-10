"use client";
import { CoursesPrices } from "@/types/types";
import { CourseListItem } from "./CourseListItem/CourseListItem";
import { CourseConsultModal } from "../modals/CourseConsultModal/CourseConsultModal";
import { useEffect, useState } from "react";

const CoursesCards = ({
  id,
  title,
  price,
  listItems,
  btnText,
}: CoursesPrices) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (!isModal) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isModal]);

  const coursesInfo = { id, title, price, listItems, btnText };

  const handleModal = (): void => setIsModal((prev) => !prev);

  return (
    <div
      className="flex flex-col max-w-[370px] items-center justify-between px-6 py-6 gap-2 border border-pink-500 shadow-lg rounded-md bg-violet-100 hover:shadow-pink-500 duration-200 hover:shadow-xl"
      key={id}
    >
      <h3 className="text-pink-500 text-[18px]">{title}</h3>
      <span className="mt-8 text-5xl text-pink-600 font-bold px-4 border-b border-pink-400 pb-4">
        ${price}
      </span>

      <ul className="text-pink-500/90 text-center flex flex-col gap-1 items-center list-disc px-4">
        {listItems.map((lItem) => (
          <CourseListItem {...lItem} key={lItem.id} />
        ))}
      </ul>

      <button
        className="w-full text-2xl px-6 py-2 mt-6 text-pink-500 font-semibold border-2 rounded-sm border-pink-500 bg-gray-50/30 hover:bg-pink-500/70 hover:text-pink-50 duration-200"
        onClick={handleModal}
      >
        {btnText}
      </button>

      {isModal && (
        <CourseConsultModal {...coursesInfo} setIsModal={setIsModal} />
      )}
    </div>
  );
};

export default CoursesCards;
