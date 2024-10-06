import { cookies } from "next/headers";
import { IEmailData } from "../NotificationItems/NotificationItems";
import { NoEmailsIncoming } from "./NoEmailsIncoming/NoEmailsIncoming";
import { ReplyEmailCard } from "./ReplyEmailCard/ReplyEmailCard";
import { IEmail, IReplyData } from "@/models/Emails";

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


export interface IReplyEmail extends IEmail {
  replyData: IReplyData,
  createdAt: number,
  updatedAt: number,
  _id: string;
}

export const FetchEmailReply = async ({url}: {url: string}) => {
  const cookieHeader = cookies().toString();
  const urlToReply = `${url}/reply`
  const emails: IReplyEmail[] = await fetchEmails(cookieHeader, urlToReply);

  return (
    <div className="h-screen flex flex-col w-full">
      {!emails.length ? (
        <NoEmailsIncoming/>
      ) : (
        emails.map((item) => (
          <ReplyEmailCard key={item._id} {...item}/>
        ))
      )}
    </div>
  );
};
