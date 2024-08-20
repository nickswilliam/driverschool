import connectDB from "@/database/config";
import { authOptions } from "@/lib/auth-options";
import Email from "@/models/Emails";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

//restore mail
export async function PATCH(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  const { _id } = params;
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
        { message: "No tienes los permisos para eliminar el correo." },
        { status: 401 }
      );
    }

    const restoreMail = await Email.findByIdAndUpdate(_id, {isTrash: false}, {new: true} );

    return NextResponse.json(restoreMail, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
