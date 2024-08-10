import { DashboardUserLoged } from "@/components/DashboardUserLoged/DashboardUserLoged";

function DashboardPage() {
  return (
    <section className="flex flex-col w-full h-screen px-10 py-8 gap-8">
      <h2 className="text-cyan-800 font-bold text-lg">Panel principal 🏠</h2>

      {/* Card principal */}
      <div className="self-center w-full max-w-[80%] rounded-md bg-slate-100 px-10 py-8 shadow-md">
        <h2 className="text-xl text-cyan-800">
          <span className="text-2xl font-bold">Bienvenido/a</span> <br />
          <DashboardUserLoged />{' '}
          al panel de administración de Motivando Conductoras.
        </h2>
      </div>
    </section>
  );
}

export default DashboardPage;
