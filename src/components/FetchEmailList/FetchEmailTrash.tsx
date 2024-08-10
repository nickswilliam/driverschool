import React from "react";
import { cookies } from "next/headers";
import { IEmailData } from "../NotificationItems/NotificationItems";
import { translateSection } from "@/utils/translate-section";
import { formatDate } from "@/utils/format-date";
import { emailsUrl } from "@/data/fetchLinks";

export const fetchEmails = async (cookies: string, url: string) => {
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      Cookie: cookies,
    },
    method: "GET",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failing to fetch data");
  }

  const data = await response.json();
  return data;
};

interface IEmailDataTrash extends IEmailData {
  updatedAt: string;
}

export const FetchEmailTrash = async ({url}: {url: string}) => {
  const cookieHeader = cookies().toString();
  const emails: IEmailDataTrash[] = await fetchEmails(cookieHeader, url);

  return (
    <div className="h-screen flex flex-col w-full">
      {!emails ? (
        <span>No hay emails en la papelera</span>
      ) : (
        emails.map((item) => (
          <div
            className="w-full flex flex-col gap-6 px-6"
            key={item._id as any}
          >
            <div
              className={`cursor-pointer flex items-center gap-6 py-2 px-4 bg-slate-100 rounded-md shadow-sm mb-[6px] hover:shadow-lg transition-colors duration-150`}
            >
              <h3>{item.name}</h3>
              <span>Email: {item.email}</span>
              <span>Fecha: {formatDate(item.updatedAt)}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
