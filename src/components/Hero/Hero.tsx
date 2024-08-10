import { FaCaretLeft } from "react-icons/fa";
import { heroList } from "@/data/hero-list-courses";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full flex flex-col h-screen py-4 items-center relative">
      {/* BG - IMG */}
      <div className="-mt-16 bg-hero-img absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat"></div>

      {/* hero elements */}
      <div className="flex flex-col w-full h-3/4 py-5 px-10 sm:px-20 items-end sm:items-end justify-between z-10 gap-6">
        <h1 className="uppercase italic sm:mt-4 text-3xl sm:text-5xl font-semibold text-violet-100 py-2 bg-pink-400/80 backdrop-blur-sm w-full lg:w-1/2 text-left sm:text-center rounded-md animate__animated animate__fadeInRight drop-shadow-sm tracking-normal">
          Motivando <span className="text-pink-100">Conductoras</span>
        </h1>

        <ul className="w-full flex flex-col gap-6 text-violet-100 font-normal text-[21px] sm:text-2xl items:center sm:items-end">
          {heroList.map((item) => (
            <li
              key={item.id}
              className="flex gap-2 justify-between md:items-center animate__animated animate__bounceInUp animate__delay_1s drop-shadow-md"
            >
              <span>{item.text}</span>
              <FaCaretLeft className="text-pink-500" size={32} />
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="self-center sm:self-end border-2 rounded-sm py-3 px-12 text-xl border-pink-500 text-pink-600 font-bold bg-violet-100/50 hover:bg-pink-500/40 hover:text-pink-100 animate__animated animate__fadeInUp animate__delay_2s"
        >
          Contactanos
        </Link>
      </div>
    </section>
  );
};

export default Hero;
