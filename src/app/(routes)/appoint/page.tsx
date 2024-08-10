import AppointForm from "@/components/AppointForm/AppointForm";
import TitleHeaderOfPage from "@/components/TitleHeaderOfPage/TitleHeaderOfPage";
import AppointContainer from "@/pages/Appoint/Appoint";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservar",
  description: "Formulario para reservar en efectivo/transferencia o tarjetas de crédito/débito mediante mercado pago."
};

const Appoint = () => {
  return (
    <AppointContainer>
      <section className="w-full flex flex-col items-center bg-violet-100 pb-16 gap-10">
        <TitleHeaderOfPage bgColor="bg-pink-700" title="Reservas Online" />

        <h3 className="text-3xl text-center text-pink-700 animate__animated animate__fadeInUp">
          Completá tus datos y una instructora se contactará con vos
        </h3>

        <AppointForm />
      </section>
    </AppointContainer>
  );
};
export default Appoint;
