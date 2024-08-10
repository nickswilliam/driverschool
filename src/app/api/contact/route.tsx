import { NextRequest, NextResponse } from "next/server";
import { EmailContact } from "../../../../emails/contact-email";
import { transporter } from "@/utils/nodemailer";
import { render } from "@react-email/render";
import connectDB from "@/database/config";
import EmailList from "@/models/EmailList";
import Email from "@/models/Emails";

//sube datos de contacto a través de formulario, y envía mail al usuario, según la info enviada por el formulario
export async function POST(req: NextRequest) {
  const { email, availability, phone, name, course } = await req.json();

  try {
    await connectDB();
    const mailExistente = await EmailList.findOne({ email });

    if (!mailExistente) {
      const newMail = new EmailList({ email, name, phone });
      await newMail.save();
    }

    const newEmail = new Email({email, phone, name, emailData: {availability, course}, section: "contact"})

    const emailHtml = render(
      <EmailContact
        availability={availability}
        course={course}
        name={name}
        phone={phone}
      />
    );
    const options = {
      from: '"Contacto - Motivando Conductoras" noreply@gmail.com',
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
