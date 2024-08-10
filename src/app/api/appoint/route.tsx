import { NextRequest, NextResponse } from "next/server";
import { EmailAppoint } from "../../../../emails/appoint-email";
import { transporter } from "@/utils/nodemailer";
import { render } from "@react-email/render";
import connectDB from "@/database/config";
import EmailList from "@/models/EmailList";
import Email from "@/models/Emails";

//recibe datos de formulario del lado del cliente los cuales toma el mail para enviarle un mail automatico desde resend
export async function POST(req: NextRequest) {
  const {
    email,
    availability,
    phone,
    name,
    coursePriceList,
    address,
    inBetweenStreet,
    payways,
    city,
  } = await req.json();
  try {
    await connectDB();

    const mailExistente = await EmailList.findOne({ email });

    if (!mailExistente) {
      const newMail = new EmailList({ email, name, phone });
      await newMail.save();
    }

    const newMail = new Email({email, name, phone, section: "appoint", emailData: {
      availability,
      coursePriceList,
      address,
      inBetweenStreet,
      payways,
      city
    } })

    const emailHtml = render(
      <EmailAppoint
        address={address}
        availability={availability}
        city={city}
        coursePriceList={coursePriceList}
        inBetweenStreet={inBetweenStreet}
        name={name}
        payways={payways}
        phone={phone}
      />
    );

    const options = {
      from: '"Reservas - Motivando Conductoras" noreply@gmail.com',
      to: email,
      subject: "Motivando Conductoras - Reservas",
      html: emailHtml,
    };

    await transporter.sendMail(options);
    await newMail.save()
    return NextResponse.json({ message: "Email enviado" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
