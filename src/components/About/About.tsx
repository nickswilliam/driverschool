import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function About() {
  return (
    <section className="mt-10 flex flex-col lg:flex-row w-full max-w-7xl py-16 px-5 sm:px-10 gap-12 items-center lg:items-start justify-center">
      <Image
        src="https://res.cloudinary.com/dymyb2f2i/image/upload/v1723320667/driving-school/b5ve3spo9alpsigu1yvi.png"
        alt="about-img"
        className="object-contain self-center lg:self-start order-2 lg:order-none"
        width={350}
        height={250}
        data-aos="fade-right"
        data-aos-duration="800"

      />

      <div className="self-start flex flex-col gap-4" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl text-center sm:text-left">
          Bienvenida a Autoescuela{" "}
          <span className="text-pink-600">Motivando Conductoras</span>. Un
          espacio seguro para mujeres hecho X mujeres que desean aprender a
          manejar y obtener su licencia de conducir por primera vez
        </h2>

        <h3 className="text-xl text-pink-600 text-center sm:text-left">Disponibilidad Zonal:</h3>

        {/* Contenedor de acordions */}
        <div className="flex flex-col" data-aos="zoom-in" data-aos-duration="800">
          {/* acordion1 */}
          <div className="flex flex-col gap-4 py-2 px-4">
            <Accordion type="single" collapsible className="bg-violet-100 px-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>Capital Federal</AccordionTrigger>
                <AccordionContent>
                  <ul className="text-md list-disc ml-12 text-gray-600">
                    <li>Balvanera</li>
                    <li>Liniers</li>
                    <li>Villa Luro</li>
                    <li>Flores</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* acordion 2 */}
          <div className="flex flex-col gap-4 py-2 px-4 rounded-md">
            <Accordion type="single" collapsible className="bg-violet-100 px-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>Zona Oeste</AccordionTrigger>
                <AccordionContent>
                  <ul className="text-md list-disc ml-12 text-gray-600">
                    <li>Merlo</li>
                    <li>Moron</li>
                    <li>Hurlingham Luro</li>
                    <li>Ciudadela</li>
                    <li>Ramos Mejia</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* acordion 3 */}
          <div className="flex flex-col gap-4  py-2 px-4">
            <Accordion type="single" collapsible className="bg-violet-100 px-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>Zona Norte</AccordionTrigger>
                <AccordionContent>
                  <ul className="text-md list-disc ml-12 text-gray-600">
                    <li>San Isidro</li>
                    <li>Vicente Lopez</li>
                    <li>El Palomar</li>
                    <li>Tigre</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
