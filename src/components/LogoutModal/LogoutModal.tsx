"use client"
import { LuLogOut } from "react-icons/lu";
import { signOut, useSession } from "next-auth/react";

export const LogoutModal = () => {
  const {data: session} = useSession();

  
  return (
    <div className="z-50 w-[200px] top-16 right-6 absolute bg-slate-100 shadow-lg rounded-md border p-2 flex flex-col h-auto">
        <h3 className="text-sm font-bold text-cyan-700 border-b mx-2 mt-1 pb-1">Usuario: <span className="font-normal">{session?.user?.name?.toUpperCase()}</span></h3>
        <button className="mt-2 flex items-center gap-4 bg-transparent hover:bg-zinc-300/40 px-2 py-4 rounded-md transition-colors duration-150" onClick={()=> signOut()}>
            <LuLogOut/> 
            <span>Cerrar sesión</span>
        </button>
    </div>
  )
}
