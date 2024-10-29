
import connectDB from "@/database/config";
import PriceList from "@/models/PriceList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import type { PriceCourses } from "@/types/types";

import { NextRequest, NextResponse } from "next/server";

//trae listas para select de Ef/tc y precios
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await connectDB();
  try {
    const getListCourses = await PriceList.findOne({id})
      .select("-user -createdAt -updatedAt -_id -__v")
      .lean();

    return NextResponse.json(getListCourses, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}


//modifica precios de lista para select y links p tc y mp
export async function PATCH(req: NextRequest, { params }: { params: { id: string }}) {
  const { id } = params;
  const body: PriceCourses = await req.json();
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { message: "No hay usuario logeado" },
        { status: 400 }
      );
    }

    if (session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "Usuario no autorizado a actualizar datos" },
        { status: 401 }
      );
    }

    const updateList = await PriceList.findOneAndUpdate({id}, body, {new: true}) 
    if(!updateList) {
      return NextResponse.json({message: "Error al realizar la actualización"}, {status: 400})
    }

    return NextResponse.json({message: "Listado actualizado exitosamente"}, {status: 201})

  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
