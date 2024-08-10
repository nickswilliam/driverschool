import { Refetch } from "@/components/Refetch/Refetch";
import React, { Suspense } from "react";
import LoadingEmails from "../loading";
import { FetchEmailList } from "@/components/FetchEmailList/FetchEmailList";
import { trashEmailsUrl } from "@/data/fetchLinks";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { ForbbidenAccess } from "@/components/ForbbidenAccess/ForbbidenAccess";
import { FetchEmailTrash } from "@/components/FetchEmailList/FetchEmailTrash";


const TrashPage = async () => {
  const session = await getServerSession(authOptions);

  return session?.user.role === "user" ? (
    <ForbbidenAccess/>
  ) : (
    <section className="h-screen flex flex-col w-full py-8">
      <div className="mx-6 mb-4 px-6 py-3 rounded-md shadow-md bg-slate-100 flex items-center justify-between">
        <h2 className="text-cyan-700 border-b">Papelera 🗑️:</h2>
        <Refetch />
      </div>

      <Suspense fallback={<LoadingEmails />}>
        <FetchEmailTrash url={trashEmailsUrl} />
      </Suspense>
    </section>
  );
};

export default TrashPage;
