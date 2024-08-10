import { ContactForm } from "@/components/ContactForm/ContactForm";
import TitleHeaderOfPage from "@/components/TitleHeaderOfPage/TitleHeaderOfPage";
import { contactInfo } from "@/data/contact-info";
import ContactContainer from "@/pages/Appoint/Appoint";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Formulario de contacto sobre nuestros cursos."
};

const Contact = () => {
  return (
    <ContactContainer>
      <TitleHeaderOfPage title="Contacto" bgColor="bg-pink-400" />
      <section className="w-full bg-violet-100 p-4 sm:p-8 sm:pb-16 flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Wrapper & tittle from contact form */}
        <div className="mt-8 flex flex-col gap-8 max-w-3xl w-full bg-violet-200 backdrop-blur-sm rounded-md shadow-xl py-8 px-10 animate__animated animate__fadeInUp">
          <h2 className="text-pink-600 text-3xl mb-4">Completá tus datos</h2>
          <ContactForm />
        </div>

        {/* Info contact */}
        <div className="mb-12 flex flex-col gap-6 max-w-md w-full px-4 animate__animated animate__fadeInRight">
          <h3 className="text-3xl text-indigo-600">Información de contacto</h3>

          <ul className="space-y-10 w-full">
            {contactInfo.map(({ id, link, value }) => (
              <li
                key={id}
                className="sm:text-md lg:text-lg text-indigo-700 hover:text-pink-500 transition-colors duration-150 overflow-hidden"
              >
                <Link href={link} className="flex gap-2 flex-wrap items-center">
                  {id === 1 ? (
                    <FaPhoneAlt />
                  ) : id === 2 ? (
                    <IoLogoWhatsapp />
                  ) : id === 3 ? (
                    <IoMdMail />
                  ) : (
                    <AiFillInstagram />
                  )}
                  <span className="overflow-hidden text-wrap">{value}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ContactContainer>
  );
};
export default Contact;
