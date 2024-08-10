"use client"
import { useSession } from "next-auth/react";
export const DashboardUserLoged = () => {
    const {data: session} = useSession();
  return (
    <span className="text-gray-500 capitalize">{session?.user?.name}</span>
  )
}
