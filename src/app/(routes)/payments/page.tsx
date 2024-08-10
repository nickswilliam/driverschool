import TitleHeaderOfPage from "@/components/TitleHeaderOfPage/TitleHeaderOfPage";
import PaymentsContainer from "@/pages/Appoint/Appoint";
import { Suspense } from "react";
import FetchLinksPay from "@/components/FetchLinksPays/FetchLinksPay";
import Loading from "./loading";
import Image from "next/image";
import { FaCreditCard } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagos con Tarjeta",
  description: "Enlaces de pago con tarjeta de crédito y debito mediante mercado pago"
};

const Payments = () => {
  return (
    <PaymentsContainer>
      <section className="w-full flex flex-col">
        <TitleHeaderOfPage
          bgColor="bg-indigo-950"
          title="Pagos en Linea"
          subtitle="Los precios de los cursos son con el 10% adicional de Mercado Pago*"
        />
      </section>

      <section className="bg-violet-100 w-full px-10 py-10 pb-16 flex flex-col items-center justify-between gap-12">
        <h3 className="text-3xl font-bold text-indigo-800 text-center animate__animated animate__fadeInRight">
          Cursos de Auto - Caja manual
        </h3>

        {/* streaming data links */}
        <Suspense fallback={<Loading />}>
          <FetchLinksPay />
        </Suspense>

        <Image
          src="https://d2r9epyceweg5n.cloudfront.net/stores/001/365/984/rte/mercadopago1.png"
          alt="mercado-pago"
          width={80}
          height={80}
        />
        <h4 className="text-center font-semibold italic text-slate-600 flex flex-wrap gap-3 items-center justify-center">
          ACEPTAMOS TODAS LAS TARJETAS DE CRÉDITO Y DÉBITO
          <FaCreditCard size={20}/>
        </h4>
      </section>
    </PaymentsContainer>
  );
};
export default Payments;
