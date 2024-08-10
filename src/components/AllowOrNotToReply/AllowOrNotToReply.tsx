"use client";
import { useSession } from "next-auth/react";
import { IoShieldCheckmarkSharp, IoWarningSharp } from "react-icons/io5";

export const AllowOrNotToReply = () => {
  const { data: session } = useSession();
  return (
    <div
      className={`${
        session?.user.role === "user" ? "bg-red-600" : "bg-green-600"
      } px-2 py-1 rounded-sm flex gap-2 items-center mb-6 text-white justify-center w-fit`}
    >
      {session?.user.role === "admin" ? (
        <IoShieldCheckmarkSharp />
      ) : (
        <IoWarningSharp />
      )}
      <span className="text-[12px]">
        {session?.user.role === "user"
          ? "Usuario no-autorizado"
          : "Usuario autorizado"}
      </span>
    </div>
  );
};
