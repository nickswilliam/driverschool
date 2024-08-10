import { NextRequest, NextResponse } from "next/server";
import { EmailConsult } from "../../../../emails/consult-email";
import { transporter } from "@/utils/nodemailer";
import { render } from "@react-email/render";
import EmailList from "@/models/EmailList";
import Email from "@/models/Emails";
import connectDB from "@/database/config";

//crea la consulta enviada por formulario de cliente, y envía mail al usuario con Resend, acorde a la consulta del curso que realizó el usuario.
export async function POST(req: NextRequest) {
  const { email, phone, name, courseNumber } = await req.json();

  try {
    await connectDB();
    const mailExistente = await EmailList.findOne({ email });

    if (!mailExistente) {
      const newMail = new EmailList({ email, name, phone });
      await newMail.save();
    }

    const newEmail = new Email({email, name, phone, section: "consult", emailData: {courseNumber}})

    const emailHtml = render(
      <EmailConsult
        courseNumber={courseNumber}
        name={name}
        phone={phone}
        email={email}
      />
    );
    const options = {
      from: '"Consulta - Motivando Conductoras" noreply@gmail.com',
      to: email,
      subject: "Gracias por contactarte con Motivando Conductoras",
      html: emailHtml,
    };

    await transporter.sendMail(options);
    await newEmail.save();

    return NextResponse.json({ message: "mail enviado" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
