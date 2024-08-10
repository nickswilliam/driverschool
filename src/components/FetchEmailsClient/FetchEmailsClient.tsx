"use client"
import { useState, useEffect } from "react"
import { IEmailData } from "../NotificationItems/NotificationItems";
import { NotificationsLoading } from "../NotificationItems/NotificationsLoading";

export const FetchEmailsClient = (link: string) => {
    const [emailList, setEmailsList] = useState<IEmailData[] | null>(null); 
    useEffect(() => {
        const getEmails = async () => {
          const res = await fetch(link, {
            cache: "no-store",
            credentials: "include",
            method: "GET",
          });
    
          if (!res.ok) {
            throw new Error("Failing to fetching data");
          }
    
          const data = await res.json();
    
          setEmailsList(data);
        };
        getEmails();
      }, [emailList, link]);

  return emailList
}
