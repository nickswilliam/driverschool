import connectDB from "@/database/config";
import { authOptions } from "@/lib/auth-options";
import Email from "@/models/Emails";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

//mark mail as readed or unreaded
export async function PATCH(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  const { _id } = params;

  const { isTrash } = await req.json();
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "No hay usuario logueado" },
        { status: 401 }
      );
    }

    if(session.user.role === "user"){
        return NextResponse.json({message: "No tienes los permisos para eliminar el correo."}, {status: 401})
    }

    if (!isTrash) {
      const trashTrue = await Email.findByIdAndUpdate(
        _id,
        { isTrash: true },
        { new: true }
      );
      return NextResponse.json(trashTrue, { status: 201 });
    } else {
      const trashFalse = await Email.findByIdAndUpdate(
        _id,
        { isTrash: false },
        { new: true }
      );
      return NextResponse.json(trashFalse, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
