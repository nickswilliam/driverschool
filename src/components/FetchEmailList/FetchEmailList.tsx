import { cookies } from "next/headers";
import { IEmailData } from "../NotificationItems/NotificationItems";
import { InboxEmailCard } from "./InboxEmailCard/InboxEmailCard";
import { NoEmailsIncoming } from "./NoEmailsIncoming/NoEmailsIncoming";

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

export const fetchEmailId = async (cookies: string, url: string) => {
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      Cookie: cookies,
    },
    method: "GET",
    cache: "no-store"
  });

  if (!response.ok) {
    return null
  }

  const data = await response.json();
  return data;
};

export const FetchEmailList = async ({url}: {url: string}) => {
  const cookieHeader = cookies().toString();
  const emails: IEmailData[] = await fetchEmails(cookieHeader, url);

  return (
    <div className="h-screen flex flex-col w-full">
      {!emails.length ? (
        <NoEmailsIncoming/>
      ) : (
        emails.map((item) => (
          <InboxEmailCard key={item._id} {...item}/>
        ))
      )}
    </div>
  );
};
