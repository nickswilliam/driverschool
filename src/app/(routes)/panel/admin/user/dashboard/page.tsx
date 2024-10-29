import { DashboardUserLoged } from "@/components/DashboardUserLoged/DashboardUserLoged";
import { Refetch } from "@/components/Refetch/Refetch";
import { ICoursesPrices } from "@/models/CoursesPrices";
import { formatDate } from "@/utils/format-date";
import { getMostRecentDate } from "@/utils/getMostRecentDate";
import { emailsUrl, trashEmailsUrl } from "@/data/fetchLinks";
import { cookies } from "next/headers";
import { fetchEmails } from "@/components/FetchEmailList/FetchEmailList";
import { IEmail } from "@/models/Emails";

const fetchUpdates = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("failing to fetch data");
  }

  const data = await res.json();

  return data;
};

interface IUpdatePrices extends ICoursesPrices {
  updatedAt: number;
}

interface IPricesList {
  updatedAt: number;
}

const urls = [
  "https://driverschool-two.vercel.app/api/prices/update",
  "https://driverschool-two.vercel.app/api/prices/list/update",
];

const emailUrls = [emailsUrl, trashEmailsUrl];

async function DashboardPage() {
  const cookiesString = cookies().toString();
  const lastPrices: IUpdatePrices[] = await fetchUpdates(urls[0]);
  const lastList: IPricesList[] = await fetchUpdates(urls[1]);

  const emailsInboxLength: IEmail[] = await fetchEmails(
    cookiesString,
    emailUrls[0]
  );

  const emailsTrashLength: IEmail[] = await fetchEmails(
    cookiesString,
    emailUrls[1]
  );

  const emailsReplyLength: IEmail[] = await fetchEmails(
    cookiesString,
    `${emailUrls[0]}/reply`
  );

  return (
    <section className="flex flex-col w-full h-screen px-10 py-8 gap-8">
      <h2 className="text-cyan-800 font-bold text-lg">Panel principal 🏠</h2>

      {/* Card principal */}
      <div className="self-center w-full max-w-[80%] rounded-md bg-slate-100 px-10 py-8 shadow-md">
        <h2 className="text-xl text-cyan-800">
          <span className="text-2xl font-bold">Bienvenido/a</span> <br />
          <DashboardUserLoged /> al panel de administración de Motivando
          Conductoras.
        </h2>
      </div>

      <div className="self-center w-full max-w-[80%] rounded-md bg-slate-100 px-10 pt-4 pb-8 shadow-md flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-cyan-800 font-bold text-lg">
            Ultimas actualizaciones ⚙️
          </h3>

          <Refetch />
        </div>

        <div className="flex justify-between w-full items-center border-b border-gray-500">
          <span className="text-xl text-cyan-800 font-bold ">Precios:</span>

          <p>{formatDate(getMostRecentDate(lastPrices))}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center border-b border-gray-500">
          <span className="text-xl text-cyan-800 font-bold">
            Lista | Medios de pago:
          </span>

          <p>{formatDate(getMostRecentDate(lastList))}</p>
        </div>
      </div>

      <div className="self-center w-full max-w-[80%] rounded-md bg-slate-100 px-10 pt-4 pb-8 shadow-md flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-cyan-800 font-bold text-lg">Mails ✉️</h3>
          <Refetch />
        </div>

        <div className="flex justify-between w-full items-center border-b border-gray-500">
          <span className="text-xl text-cyan-800 font-bold ">Recibidos:</span>

          <p>{emailsInboxLength.length}</p>
        </div>

        <div className="flex justify-between w-full items-center border-b border-gray-500">
          <span className="text-xl text-cyan-800 font-bold ">Enviados:</span>

          <p>{emailsReplyLength.length}</p>
        </div>

        <div className="flex justify-between w-full items-center border-b border-gray-500">
          <span className="text-xl text-cyan-800 font-bold ">Papelera:</span>

          <p>{emailsTrashLength.length}</p>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
