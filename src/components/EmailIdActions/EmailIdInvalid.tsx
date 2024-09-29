import Link from 'next/link'

export const EmailIdInvalid = () => {
  return (
    <section className="w-full h-screen py-8 px-6">
        <div className="flex flex-col items-center bg-slate-100 rounded-md shadow-md px-6 py-8 gap-4">
          <h2 className="font-bold">No hay email para el ID descripto*</h2>
          <Link
            className="rounded-md px-4 py-2 bg-cyan-800 text-white"
            href="/panel/admin/user/dashboard/mails/"
          >
            Regresar a bandeja de entrada
          </Link>
        </div>
      </section>
  )
}
