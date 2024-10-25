import connectDB from "@/database/config";
import { authOptions } from "@/lib/auth-options";
import Email from "@/models/Emails";
import { transporter } from "@/utils/nodemailer";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

//take reply mail to sent new email response
export async function PATCH(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  const { _id } = params;

  const { subject, email, textEmailArea } = await req.json();
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "No hay usuario logueado" },
        { status: 401 }
      );
    }

    if (session.user.role === "user") {
      return NextResponse.json(
        { message: "No cuenta con los permisos para responder el mail" },
        { status: 401 }
      );
    }

    await Email.findByIdAndUpdate(
      _id,
      {
        isReply: true,
        replyData: {
          subject,
          textEmailArea,
        },
      },
      { new: true }
    );

    const options = {
      from: '"Motivando Conductoras" noreply@gmail.com',
      to: email,
      subject,
      text: textEmailArea,
    };

    await transporter.sendMail(options);
    return NextResponse.json(
      { message: "Se envío la respuesta del mail" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
