import { IEmail } from "@/models/Emails";
import { NotificationItemCard } from "../NotificationItemCard/NotificationItemCard";
import { FetchEmailsClient } from "../FetchEmailsClient/FetchEmailsClient";
import { emailsUrl } from "@/data/fetchLinks";
import { NotificationsLoading } from "./NotificationsLoading";
import React from "react";

export interface IEmailData extends IEmail {
  _id: string;
  createdAt: string;
}

export const NotificationsFetch = () => {
  const emailList = FetchEmailsClient(emailsUrl);
  return (
    <>
      {!emailList ? (
        <NotificationsLoading />
      ) : !emailList.length ? (
        <span>No hay mails para mostrar</span>
      ) : (
        emailList.map((item) => (
          <NotificationItemCard key={item._id} {...item} />
        ))
      )}
    </>
  );
};
