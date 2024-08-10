import Link from "next/link";
import { FaCar, FaGraduationCap, FaBook } from "react-icons/fa";


const Courses = () => {
  return (
    <div className="-mt-4 w-full max-w-7xl py-16 px-5 sm:px-10 flex flex-wrap items-center gap-4 justify-center z-10">
      {/* card 1 */}
      <Link
        href="/courses/car-initial"
        className="transition-all ease-out delay-150 hover:shadow-xl hover:shadow-violet-500/60 w-full md:w-[300px] h-[200px] animate__animated animate__bounceInUp"
        title="Ir a: Practicas Inicial"
      >
        <div className="flex flex-col items-center justify-around px-2 py-4 bg-violet-100/90 backdrop-blur-md w-full h-full rounded-md shadow-md">
          <FaCar className="text-3xl sm:text-4xl md:text-5xl text-violet-600" />
          <h2 className="text-2xl text-violet-600 font-semibold">
            Prácticas de Auto
          </h2>
          <p className="text-violet-400">Todos los niveles</p>
        </div>
      </Link>

     

      {/* card 3 */}
      <Link
        href="/courses/exam"
        className="transition-all ease-out delay-150 hover:shadow-xl hover:shadow-violet-500/60 w-full md:w-[300px] h-[200px] animate__animated animate__bounceInUp animate__fast"
        title="Ir a: Examen de Manejo"
      >
        <div className="flex flex-col items-center justify-around px-2 py-4 bg-violet-100/90 backdrop-blur-md w-full h-full rounded-md shadow-md">
          <FaGraduationCap className="text-3xl sm:text-4xl md:text-5xl text-violet-600" />
          <h2 className="text-2xl text-violet-600 font-semibold">
            Examen de Manejo
          </h2>
          <p className="text-violet-400 text-center">
            Te preparamos para rendir el exámen de manejo.
          </p>
        </div>
      </Link>

      {/* card 4 */}
      <Link
        href="/courses/content"
        className="transition-all ease-out delay-150 hover:shadow-xl hover:shadow-violet-500/60 w-full md:w-[300px] h-[200px] animate__animated animate__bounceInUp animate__fast animate__delay-1s"
        title="Ir a: Contenido teorico"
      >
        <div className="flex flex-col items-center justify-around px-2 py-4 bg-violet-100/90 backdrop-blur-md w-full h-full rounded-md shadow-md">
          <FaBook className="text-3xl sm:text-4xl md:text-5xl text-violet-600" />
          <h2 className="text-2xl text-violet-600 font-semibold">
            Contenido teorico
          </h2>
          <p className="text-violet-400 text-center">
            Todo el contenido teorico con las leyes de tránsito vigente para el
            examen teorico.
          </p>
        </div>
      </Link>
    </div>
  );
};
export default Courses;
