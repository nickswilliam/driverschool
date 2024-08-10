"use client"
import { IoReload } from "react-icons/io5";
import { useRouter } from "next/navigation";

export const Refetch = () => {
    const router = useRouter()
  return (
    <button onClick={()=> router.refresh()} className="bg-slate-100 rounded-md shadow-md p-2 border" title="Refrescar">
        <IoReload size={20}/>
    </button>
  )
}
