import connectDB from "@/database/config";
import { authOptions } from "@/lib/auth-options";
import Email from "@/models/Emails";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

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
      /* traer array de emails recibidos */
      //ordenados en orden descendente, desde el mas reciente hasta el menos reciente
      const mails = await Email.find().sort({ createdAt: -1 });
  
      return NextResponse.json(mails, {
        status: 200,
      });
    } catch (error) {
      return NextResponse.json(error, { status: 500 });
    }
  }