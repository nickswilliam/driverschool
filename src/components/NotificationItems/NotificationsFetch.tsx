import { IEmail } from "@/models/Emails";
import { NotificationItemCard } from "../NotificationItemCard/NotificationItemCard";
import { FetchEmailsClient } from "../FetchEmailsClient/FetchEmailsClient";
import { emailsUrl } from "@/data/fetchLinks";
import { NotificationsLoading } from "./NotificationsLoading";


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
          <NotificationItemCard
            key={item._id as any}
            email={item.email}
            emailData={item.emailData}
            _id={item._id}
            isReaded={item.isReaded}
            isReply={item.isReply}
            isTrash={item.isTrash}
            name={item.name}
            phone={item.phone}
            section={item.section}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
          />
        ))
      )}
    </>
  );
};
