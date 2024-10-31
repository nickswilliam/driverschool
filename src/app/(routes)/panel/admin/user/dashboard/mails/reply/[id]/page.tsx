import { EmailData } from "@/components/EmailIdActions/EmailData";
import { emailsUrl } from "@/data/fetchLinks";
import { IEmail } from "@/models/Emails";
import { cookies } from "next/headers";
import { fetchEmailId } from "@/components/FetchEmailList/FetchEmailList";
import { redirect } from "next/navigation";
import { EmailIdInvalid } from "@/components/EmailIdActions/EmailIdInvalid";
import { ReplyEmailIdHeader } from "@/components/EmailIdActions/ReplyEmailIdActions/ReplyEmailIdHeader";
import { ReplyEmailSentMsj } from "@/components/EmailIdActions/ReplyEmailIdActions/ReplyEmailIdSentMsj";
import { Metadata } from "next";
import { ReplyEmailIdActions } from "@/components/EmailIdActions/ReplyEmailIdActions/ReplyEmailIdActions";

export const metadata: Metadata = {
  title: "Leer enviado",
};


export interface IEmailActions extends IEmail {
  _id: string;
  createdAt: number;
  updatedAt: number;
}

const ReplyMailId = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cookiesHeader = cookies().toString();
  const urlFetch = `${emailsUrl}/${id}`;
  const emailId: IEmailActions = await fetchEmailId(cookiesHeader, urlFetch);

  if (!emailId) {
    return <EmailIdInvalid />;
  }

  if (emailId.isTrash) {
    redirect("/panel/admin/user/dashboard/mails/trash");
  }

  return (
    <section className="w-full h-screen py-8 px-6">
      <div
        className={`px-6 py-4 flex flex-col gap-3 bg-slate-100 rounded-md shadow-md ${
          emailId.isReaded ? "shadow-black/40" : "shadow-cyan-500"
        }`}
      >
        {/* Email actions */}
        <ReplyEmailIdActions {...emailId} />

        {/* Avatar mail icon to inbox data - reply & more */}
        <ReplyEmailIdHeader {...emailId} />

        {/*  */}

        {/* Email inbox Data */}
        <div className="flex flex-col gap-2">
          <span>
            <strong>Nombre:</strong> {emailId.name}
          </span>
          <span>
            <strong>Teléfono:</strong> {emailId.phone}
          </span>
          <h2 className="mt-2 w-fit  font-bold py-2 px-2 bg-slate-500 rounded-sm text-white">
            Información de Formulario:
          </h2>

          <EmailData {...emailId.emailData} />
        </div>

        <hr className="border-b border-gray-400" />

        <ReplyEmailSentMsj {...emailId} />

        {/* Email reply Data */}
        <div className="flex flex-col gap-2">
          <p>{emailId.replyData.textEmailArea}</p>
        </div>

        <pre className="text-slate-400 self-end">
          {emailId.isReaded ? "Leído" : "Sin leer"}
        </pre>
      </div>
    </section>
  );
};

export default ReplyMailId;
