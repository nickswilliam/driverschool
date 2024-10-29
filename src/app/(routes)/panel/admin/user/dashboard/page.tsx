import { DashboardUserLoged } from "@/components/DashboardUserLoged/DashboardUserLoged";

const fetchUpdates = async(url: string)=> {
  const res = await fetch(url, {cache: 'no-store'})

  if(!res.ok){
    throw new Error('failing to fetch data')
  }

  const data = await res.json()

  return data
}

async function DashboardPage() {


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

      <div className="self-center w-full max-w-[80%] rounded-md bg-slate-100 px-10 py-8 shadow-md">
        <span className="text-xl text-cyan-800">Precios</span>
      </div>
    </section>
  );
}

export default DashboardPage;
