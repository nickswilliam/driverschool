import React from "react";
import { cookies } from "next/headers";
import { IEmailData } from "../NotificationItems/NotificationItems";
import { formatDate } from "@/utils/format-date";
import { TrashEmailCard } from "./TrashEmailCard/TrashEmailCard";

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
  updatedAt: number;
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
          <TrashEmailCard key={item._id} {...item}/>
        ))
      )}
    </div>
  );
};
