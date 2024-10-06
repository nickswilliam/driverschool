import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import connectDB from "@/database/config";
import { NextRequest, NextResponse } from "next/server";
import Email from "@/models/Emails";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { message: "No hay usuario logueado" },
        { status: 401 }
      );
    }
    /* traer array de emails respondidos */
    //ordenados en orden descendente, desde el mas reciente hasta el menos reciente
    const mails = await Email.find({isReply: true}).sort({ createdAt: -1 });

    return NextResponse.json(mails, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
