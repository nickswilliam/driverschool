import connectDB from "@/database/config";
import { authOptions } from "@/lib/auth-options";
import Email from "@/models/Emails";
import { ObjectId } from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

//mark mail as readed or unreaded
export async function GET(
  req: NextRequest,
  { params }: { params: { _id: ObjectId } }
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

    const mailFinded = await Email.findOne({ _id });

    if (!mailFinded) {
      return NextResponse.json(
        { message: "Mail no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(mailFinded, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
