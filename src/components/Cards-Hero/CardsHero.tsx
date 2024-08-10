import { FaHandsHelping, FaPhone, FaCarSide } from "react-icons/fa";
import { AOSWrapper } from "../AOSWrapper/AOSWrapper";

export default function CardsHero() {
  return (
    <section className="-mt-16 w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 px-10 bg-violet-300 py-10">
        <div
          className="bg-violet-100 shadow-xl w-full md:w-[300px] py-2 px-4 h-40 flex flex-col items-center justify-center gap-2 hover:bg-pink-400 hover:text-violet-100 cursor-pointer transition-all delay-150"
          data-aos="flip-left"
        >
          <FaHandsHelping className="text-violet-600 text-5xl" />
          <span className="text-center">
            Acompañamiento en cada clase, desde inicial a avanzado.
          </span>
        </div>

        <div
          className="bg-violet-100 shadow-xl w-full md:w-[300px] py-2 px-4 h-40 flex flex-col items-center justify-center gap-2 hover:bg-pink-400 hover:text-violet-100 cursor-pointer transition-all delay-150"
          data-aos="flip-right"
        >
          <FaPhone className="text-violet-600 text-5xl" />
          <span className="text-center">
            Contacto teléfonico en franja horaria extendida.
          </span>
        </div>

        <div
          className="bg-violet-100 shadow-xl w-full md:w-[300px] py-2 px-4 h-40 flex flex-col items-center justify-center gap-2 hover:bg-pink-400 hover:text-violet-100 cursor-pointer transition-all delay-150"
          data-aos="flip-left"
        >
          <FaCarSide className="text-violet-600 text-5xl" />
          <span className="text-center">
            Te ayudamos a sacar tu registro de conducir desde 0.
          </span>
        </div>
    </section>
  );
}
