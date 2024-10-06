import { ForbbidenAccess } from "@/components/ForbbidenAccess/ForbbidenAccess";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import React, { Suspense } from "react";
import LoadingEmails from "./loading";
import { FetchEmailList } from "@/components/FetchEmailList/FetchEmailList";
import { emailsUrl } from "@/data/fetchLinks";
import { Refetch } from "@/components/Refetch/Refetch";
import { FetchEmailReply } from "@/components/FetchEmailList/FetchEmailReply";


export const metadata: Metadata = {
  title: "Enviados",
};


const ReplyPage = async () => {
  const session = await getServerSession(authOptions);
  return session?.user.role === "user" ? (
    <ForbbidenAccess />
  ) : (
    <section className="h-screen flex flex-col w-full py-8 px-6">
      <div className="mb-4 pl-4 pr-6 py-3 rounded-md shadow-md bg-slate-100 flex items-center justify-between">
        <h2 className="text-cyan-700 border-b">Enviados 📤:</h2>
        <Refetch/>
      </div>

      <Suspense fallback={<LoadingEmails/>}>
        <FetchEmailReply url={emailsUrl}/>
      </Suspense>
    </section>
  );
};

export default ReplyPage;






