import { Metadata } from "next";
import React, { Suspense } from "react";

import Loading from "./loading";
import {FetchListPrices} from "@/components/FetchListPrices/FetchListPrices";

export const metadata: Metadata = {
  title: "Listas - Precios",
};

function ListDashboardPage() {
  return (
    <div className="flex flex-col w-full h-screen gap-8 pb-24">
      <h2 className="mt-10 text-cyan-800 text-lg border-dotted border-b border-cyan-800 w-fit">
        Listado de precios | Efectivo 💵
      </h2>

      <Suspense fallback={<Loading/>}>
        <FetchListPrices id="1"/>
      </Suspense>


      <h2 className="mt-10 text-cyan-800 text-lg border-dotted border-b border-cyan-800 w-fit">
        Listado de precios | Tarjeta 💳
      </h2>

      <Suspense fallback={<Loading/>}>
        <FetchListPrices id="2"/>
      </Suspense>
    </div>
  );
}

export default ListDashboardPage;
