import connectDB from "@/database/config";
import { authOptions } from "@/lib/auth-options";
import Email from "@/models/Emails";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

//take reply mail to sent new email response
export async function PATCH(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  const { _id } = params;

  const { isReply } = await req.json();
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "No hay usuario logueado" },
        { status: 401 }
      );
    }

    if(session.user.role === 'user'){
        return NextResponse.json({message: 'No cuenta con los permisos para responder el mail'} , {status: 401})
    }

    if (!isReply) {
      const updateState = await Email.findByIdAndUpdate(
        _id,
        { isReply: true },
        { new: true }
      );
      return NextResponse.json(updateState, { status: 201 });
    } else {
      const updateState = await Email.findByIdAndUpdate(
        _id,
        { isReply: false },
        { new: true }
      );
      return NextResponse.json(updateState, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
