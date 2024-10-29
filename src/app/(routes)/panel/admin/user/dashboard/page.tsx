import { DashboardUserLoged } from "@/components/DashboardUserLoged/DashboardUserLoged";
import { Refetch } from "@/components/Refetch/Refetch";
import { ICoursesPrices } from "@/models/CoursesPrices";
import { IPriceList } from "@/models/PriceList";
import { formatDate } from "@/utils/format-date";
import { getMostRecentDate } from "@/utils/getMostRecentDate";

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
async function DashboardPage() {
  const lastPrices: IUpdatePrices[] = await fetchUpdates(urls[0]);
  const lastList: IPricesList[] = await fetchUpdates(urls[1]);

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

      <h3 className="text-cyan-800 font-bold text-lg">
        Ultimas actualizaciones ⚙️
      </h3>

      <div className="self-center w-full max-w-[80%] rounded-md bg-slate-100 px-10 py-8 shadow-md flex flex-col gap-4">
        <div className="self-end"><Refetch/></div>
        <div className="flex justify-between w-full items-center border-b border-gray-500">
          <span className="text-xl text-cyan-800 font-bold ">Precios:</span>

          <p>{formatDate(getMostRecentDate(lastPrices))}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between w-full items-center border-b border-gray-500">
          <span className="text-xl text-cyan-800 font-bold">Lista | Medios de pago:</span>

          <p>{formatDate(getMostRecentDate(lastList))}</p>
        </div>


      </div>
    </section>
  );
}

export default DashboardPage;
