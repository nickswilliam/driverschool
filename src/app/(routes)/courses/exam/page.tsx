import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Examen de manejo",
  description: "Información acerca del exámen práctico y teórico de manejo."
};

const Exam = () => {
  return (
    <section className="w-full flex flex-col gap-4 bg-violet-100 pb-12">
      {/* top title */}
      <div className="bg-violet-600/70 px-5 sm:px-10 py-2 flex flex-col gap">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-violet-100 animate__animated animate__fadeInLeftBig">
          Examen de Manejo:
        </h2>
        <h3 className="text-xl text-violet-200 font-semibold animate__animated animate__fadeInLeft animation__delay-1s">
          Te preparamos para rendir el examen práctico.
        </h3>
      </div>
      {/* top main - content */}
      <div className="self-center max-w-7xl flex flex-col items-center gap-8 pt-5 pb-16 px-10">
        {/* Top img & text */}
        <div className="flex items-center gap-6 flex-col lg:flex-row py-10">
          <p className="text-xl text-violet-700 animate__animated animate__fadeInUp animate__slow">
            En <span className="text-pink-500">Motivando Conductoras</span>, no
            solamente te preparamos para dar tus primeros pasos como conductora,
            sino que además te preparamos con todo lo que necesitas saber en
            cuanto a técnica para rendir el examen práctico de manejo, de
            acuerdo a las evaluaciones que se realizan en cada municipio y/o
            jurisdicción en la cual residís.
          </p>
          <Image
            src="https://assets.entrepreneur.com/content/3x2/2000/1614892837-GettyImages-1172770253.jpg"
            alt="car-course-img"
            className="w-[500px] object-fill object-center animate__animated animate__pulse animate__infinite animate__slow rounded-full shadow-xl"
            width={500}
            height={150}
          />
        </div>

        {/* sub title - and paragraph */}
        <h2
          className="text-3xl sm:text-4xl font-semibold text-pink-500 text-center mt-5"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          ¿Que necesito aprender{" "}
          <span className="text-violet-600">para poder rendir?</span>
        </h2>

        <div className="flex items-center gap-6 flex-col lg:flex-row my-10">
          <Image
            src="https://media.gettyimages.com/id/648946918/es/foto/casual-start-up-businesswomen-talking.jpg?s=612x612&w=0&k=20&c=ZNRWRm6bQ1DMbBXaTDEhP6z6ZvyNLI2qNwpnvc9q-6A="
            alt="car-course-img"
            className="w-[500px] object-fill object-center rounded-[40%] shadow-xl"
            data-aos="flip-right"
            data-aos-duration="900"
            width={500}
            height={150}
          />
          <p
            className="text-lg sm:text-xl text-center text-violet-700"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Necesitas haber avanzado ya sea desde inicial a avanzado, o de
            intermedio a avanzado en nivel de aprendizaje práctico, ya que al
            completar el nivel avanzado dentro del curso de{" "}
            <span className="text-pink-500">Motivando Conductoras</span>, se les
            enseña a las alumnas todas las técnicas correspondientes de
            estacionamiento y maniobras para poder rendir el examen. A su vez en
            nuestra sección de{" "}
            <Link
              href="/courses/content"
              className="text-pink-500 font-semibold italic"
              title="Ir a: Cursos - Contenido Teorico"
            >
              contenido teorico
            </Link>{" "}
            podrás encontrar material para rendir el examen teorico, que es el
            primer examen que rendiras antes de realizar el práctico.
          </p>
        </div>
      </div>
      |
      <h2
        className="mb-10 -mt-10 text-center text-3xl font-semibold text-violet-500"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Para más información,{" "}
        <Link
          href="/contact"
          className="text-pink-500 italic border-b border-dotted border-pink-500 hover:text-pink-400 hover:border-pink-400 duration-150"
          title="Ir a: Contacto"
        >
          contactanos.
        </Link>
      </h2>
    </section>
  );
};
export default Exam;
