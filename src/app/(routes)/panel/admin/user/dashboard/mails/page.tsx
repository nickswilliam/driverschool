
import { Metadata } from "next";
import React, { Suspense } from "react";

import LoadingEmails from "./loading";
import { FetchEmailList } from "@/components/FetchEmailList/FetchEmailList";
import { emailsUrl } from "@/data/fetchLinks";
import { Refetch } from "@/components/Refetch/Refetch";


export const metadata: Metadata = {
  title: "Emails",
};

export default async function MailsDashboardPage() {
  return (
    <section className="h-screen flex flex-col w-full py-8">
      <div className="mx-6 mb-4 pl-4 pr-6 py-3 rounded-md shadow-md bg-slate-100 flex items-center justify-between">
        <h2 className="text-cyan-700 border-b">Bandeja de entrada</h2>
        <Refetch/>
      </div>

      <Suspense fallback={<LoadingEmails/>}>
        <FetchEmailList url={emailsUrl}/>
      </Suspense>
    </section>
  );
}
