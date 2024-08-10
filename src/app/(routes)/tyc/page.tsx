import TermsContainer from "@/pages/Appoint/Appoint";
import TitleHeaderOfPage from "@/components/TitleHeaderOfPage/TitleHeaderOfPage";
import { tycInfo } from "@/data/tyc-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones de contratación del servicio de motivando conductoras."
};

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <TitleHeaderOfPage
        bgColor="bg-orange-400"
        title="Términos y condiciones"
      />

      <section className="bg-violet-100 w-full px-8 py-10 self-center">
        {/* Container of text Terms & conditions */}
        <div className="my-10 max-w-5xl mx-auto flex flex-col gap-6">
          {tycInfo.map(({ description, id, title }) => (
            <div className="flex gap-3 flex-wrap items-center" key={id}>
              <span className="text-orange-600 text-2xl">{id}</span>
              <h3 className="text-orange-600 font-bold text-2xl">{title}:</h3>
              <p className="text-gray-500">{description}</p>
            </div>
          ))}

          <h4 className="mt-8 text-orange-600 font-bold">HABIENDO LEÍDO Y ESTANDO DE ACUERDO ACEPTO EN CONFORMIDAD LOS TÉRMINOS Y CONDICIONES.</h4>
        </div>
      </section>
    </TermsContainer>
  );
};
export default TermsAndConditions;
