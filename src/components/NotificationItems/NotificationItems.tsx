import { IEmail } from "@/models/Emails";
import { NotificationsFetch } from "./NotificationsFetch";
export interface IEmailData extends IEmail {
  _id: string;
  createdAt: string;
}

export const NotificationItems = () => {
  return (
    <div className="z-50 absolute bg-slate-100 sm:w-[520px] h-96 sm:h-72 right-6 left-4 top-16 sm:right-24 sm:left-auto sm:top-16 shadow-lg rounded-md border overflow-y-scroll p-4 flex flex-col gap-4">
      <h2 className="text-sm font-bold text-cyan-900">Notificaciones:</h2>

      <NotificationsFetch />
    </div>
  );
};
