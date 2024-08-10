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

  const { isReaded } = await req.json();
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "No hay usuario logueado" },
        { status: 401 }
      );
    }

    if (!isReaded) {
      const updateState = await Email.findByIdAndUpdate(
        _id,
        { isReaded: true },
        { new: true }
      );
      return NextResponse.json(updateState, { status: 201 });
    } else {
      const updateState = await Email.findByIdAndUpdate(
        _id,
        { isReaded: false },
        { new: true }
      );
      return NextResponse.json(updateState, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
