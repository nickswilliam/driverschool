import { FaCalendar, FaClock } from "react-icons/fa";
import { coursesPrices } from "@/data/car-courses-prices";
import CoursesCards from "@/components/CoursesCards/CoursesCards";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prácticas de Auto",
  description: "Todos los niveles de práctica de manejo, horarios disponibles y precios vigentes."
};

const CarInitial = () => {

  return (
    <section className="w-full flex flex-col gap-4 bg-violet-100 pb-12">
      {/* top title */}
      <div className="bg-violet-300/70 px-5 sm:px-10 py-2 flex flex-col gap">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-pink-600 animate__animated animate__fadeInLeftBig">
          Practicas de Auto:
        </h2>
        <h3 className="text-xl text-gray-600 font-semibold animate__animated animate__fadeInLeft animation__delay-1s">
          Inicial - Intermedio - Avanzado
        </h3>
      </div>

      {/* top main - content */}
      <div className="self-center max-w-7xl flex flex-col items-center gap-8 pt-5 pb-16 px-10">
        {/* Top img & text */}
        <div className="-mt-16 flex items-center gap-6 flex-col lg:flex-row py-10">
          <Image
            src="https://res.cloudinary.com/dymyb2f2i/image/upload/v1708290265/driving-school/zoi7ilcsk5wgmnlqnin9.png"
            alt="car-course-img"
            className="w-[500px] object-fill object-center animate__animated animate__fadeInUp"
            width={500}
            height={150}
          />
          <p className="text-xl text-violet-700 animate__animated animate__fadeInUp animate__slow">
            Los cursos de manejo son con clases a domicilio, dentro de Capital
            Federal y Gran Buenos Aires. Las clases se brindan en espacios de
            tránsito real o bien en pista de aprendizaje, dependiendo en la zona
            en donde la alumna decida tomar la clase. Las clases duran 1h y el
            servicio es de puerta a puerta.
          </p>
        </div>

        {/* sub title - and paragraph */}
        <h2
          className="text-3xl sm:text-4xl font-semibold text-pink-600 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          ¿Que aprenderas en nuestro{" "}
          <span className="text-blue-700">Curso?</span>
        </h2>
        <p
          className="text-lg sm:text-xl text-center"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          Aprenderas a dar tus primeros pasos en la conducción, si es la primera
          vez que vas a manejar. En el caso de que ya cuentes con algo de
          experiencia, se lo podés comentar a tu instructora, y las clases se
          ajustarán a tus aptitudes. Comprenderas que cosas son esenciales desde
          0 para una correcta conducción y dar ese salto a convertirte en
          conductora.
        </p>

        {/* second sub title */}
        <div className="mt-10 flex flex-col gap-6">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-violet-500 text-center"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            ¿Cual es la disponibilidad{" "}
            <span className="text-pink-600">horaria?</span>
          </h2>

          {/* cards hour - container */}
          <div
            className="flex items-center justify-center gap-4 flex-wrap"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            {/* card 01 */}
            <div className="flex flex-col items-center justify-center gap-3 max-w-60 rounded-md border px-3 py-2 border-pink-400 h-52">
              <FaCalendar className="text-3xl text-pink-600" />
              <h3 className="text-2xl font-semibold text-pink-600">
                Todo el Año
              </h3>
              <span className="text-md text-center text-gray-500">
                Todos los días de la semana, inclusive sábados, domingos y
                feriados.
              </span>
            </div>

            {/* card 02 */}
            <div className="flex flex-col items-center justify-center gap-3 max-w-60 rounded-md border px-3 py-2 border-pink-400 h-52">
              <FaClock className="text-3xl text-pink-600" />
              <h3 className="text-2xl font-semibold text-pink-600">Horarios</h3>
              <span className="text-md text-center text-gray-500">
                Todos los días desde las 9:00 hasta las 19:00hs.
              </span>
            </div>
          </div>
        </div>
      </div>

      <h2
        className="text-center text-5xl font-semibold text-pink-600"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Precios de los cursos
      </h2>
      {/* cards prices - container*/}
      <div className="self-center mt-6 w-full max-w-7xl px-10 pt-10 pb-16 flex justify-center flex-wrap gap-4">
        {/* Cards */}
        {coursesPrices.map((value) => (
          <CoursesCards {...value} key={value.price} />
        ))}
      </div>
    </section>
  );
};
export default CarInitial;
