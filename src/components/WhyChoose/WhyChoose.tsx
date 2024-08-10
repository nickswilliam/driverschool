import Image from "next/image";
import Link from "next/link";

const WhyChoose = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 py-10">
      <h2
        className="text-5xl sm:text-6xl font-semibold text-pink-600 w-full text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        ¿Por qué <span className="text-blue-900">elegirnos?</span>
      </h2>

      {/* Cards - container */}
      <div
        className="w-full max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        {/* card 1 */}
        <div className="flex flex-col items-center px-4 py-4 gap-3">
          <Image
            src="https://www.svgrepo.com/show/510353/woman.svg"
            alt="drive-woman"
            className="w-20"
            width="20"
            height="20"
          />
          <h3 className="text-xl text-center">Clases X Mujeres</h3>
          <p className="text-center text-gray-500">
            Todas nuestras clases están hechas por mujeres y para mujeres
            exclusivamente.
          </p>
        </div>

        {/* card 2 */}
        <div className="flex flex-col items-center px-4 py-4 gap-3">
          <Image
            src="https://www.svgrepo.com/show/364599/identification-card-fill.svg"
            alt="drive-id"
            className="w-20"
            width="20"
            height="20"
          />
          <h3 className="text-xl text-center">
            Te ayudamos a Obtener el Registro
          </h3>
          <p className="text-center text-gray-500">
            Nuestras clases te van a ayudar a que logres ese objetivo tan
            deseado de ser conductora.
          </p>
        </div>

        {/* card 3 */}
        <div className="flex flex-col items-center px-4 py-4 gap-3">
          <Image
            src="https://www.svgrepo.com/show/503007/car.svg"
            alt="drive-car"
            className="w-20"
            width="20"
            height="20"
          />
          <h3 className="text-xl text-center">Autos doble comando</h3>
          <p className="text-center text-gray-500">
            Vehiculos totalmente equipados con sistema doble comando, para que
            el aprendizaje sea seguro, confiable y confortable.
          </p>
        </div>

        {/* card 4 */}
        <div className="flex flex-col items-center px-4 py-4 gap-3">
          <Image
            src="https://www.svgrepo.com/show/307646/auto-insurance-car-insurance-insured.svg"
            alt="capacitation"
            className="w-20"
            width="20"
            height="20"
          />
          <h3 className="text-xl text-center">Personal Capacitado</h3>
          <p className="text-center text-gray-500">
            Nuestras instructoras están capacitadas para guiarte de principio a
            fin, para que aprendas todo sobre una correcta conducción.
          </p>
        </div>

        {/* card 5 */}
        <div className="flex flex-col items-center px-4 py-4 gap-3">
          <Image
            src="https://www.svgrepo.com/show/490024/book-shelf.svg"
            alt="capacitation"
            className="w-20"
            width="20"
            height="20"
          />
          <h3 className="text-xl text-center">Material Teorico</h3>
          <p className="text-center text-gray-500">
            En nuestro sitio web podrás encontrar material teórico{" "}
            <Link
              href="/courses/content"
              className="border-b pb-[2px] border-slate-400"
              title="Ir a: Contenido teórico"
            >
              descargable
            </Link>{" "}
            para poder rendir el exámen teórico con las leyes de tránsito
            vigentes.
          </p>
        </div>

        {/* card 6 */}
        <div className="flex flex-col items-center px-4 py-4 gap-3">
          <Image
            src="https://www.svgrepo.com/show/522011/calendar.svg"
            alt="calendar-img"
            className="w-20"
            width="20"
            height="20"
          />
          <h3 className="text-xl text-center">
            Amplia disponibilidad horaria y semanal
          </h3>
          <p className="text-center text-gray-500">
            Contamos con clases todos los días de las semanas y con amplio rango
            horario para que puedas asistir.
          </p>
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;
