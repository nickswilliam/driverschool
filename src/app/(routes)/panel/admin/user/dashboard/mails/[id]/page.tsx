import { EmailData } from "@/components/EmailIdActions/EmailData";
import { EmailIdActions } from "@/components/EmailIdActions/EmailIdActions";
import { EmailIdHeader } from "@/components/EmailIdActions/EmailIdHeader";
import { emailsUrl } from "@/data/fetchLinks";
import { IEmail } from "@/models/Emails";
import { translateSection } from "@/utils/translate-section";
import { cookies } from "next/headers";
import { fetchEmails as fetchEmailId } from "@/components/FetchEmailList/FetchEmailList";

export interface IEmailActions extends IEmail {
  _id: string;
  createdAt: string;
}


const EmailId = async({ params }: { params: { id: string } }) => {
  const id = params.id;
  const cookiesHeader = cookies().toString();
  const emailId: IEmailActions = await fetchEmailId(
    cookiesHeader,
    `${emailsUrl}/${id}`
  );
  return (
    <div className="mt-4 mx-6 px-6 py-4 flex flex-col gap-3 bg-slate-100 rounded-md shadow-md">
      {/* Email actions */}
      <EmailIdActions {...emailId} />
      {/* Section received */}
      <div className={`rounded py-1 px-2 w-fit text-white text-sm ${emailId.section === 'consult' ? 'bg-violet-600' : emailId.section === 'contact' ? 'bg-indigo-400' : 'bg-pink-600'}`}>
        <span>{translateSection(emailId.section)}</span>
      </div>
      {/* Avatar mail icon - reply & more */}
      <EmailIdHeader {...emailId} />

      {/* Email Data */}
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
    </div>
  );
}

export default EmailId;
