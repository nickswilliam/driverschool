import { TitleHeaderPageType } from "@/types/types";

const TitleHeaderOfPage = ({
  title,
  bgColor,
  subtitle,
  titleColor,
}: TitleHeaderPageType) => {
  return (
    <div
      className={`flex flex-col w-full px-10 py-16 items-start justify-start ${bgColor}`}
    >
      <h2
        className={`${
          titleColor ? "text-indigo-800" : "text-violet-100"
        }  text-4xl font-bold animate__animated animate__fadeInLeft`}
      >
        {title}
      </h2>
      {subtitle && (
        <span className="pt-4 mt-4 border-t border-gray-600 text-violet-100 text-md font-semibold animate__animated animate__fadeInLeft">
          {subtitle}
        </span>
      )}
    </div>
  );
};
export default TitleHeaderOfPage;
