import connectDB from "@/database/config";
import PriceList from "@/models/PriceList";
import { NextResponse } from "next/server";


//trae listas para select de Ef/tc y precios
export async function GET() {
  await connectDB();
  try {
    const getListCourses = await PriceList.find()
      .select("-user -_id -__v")
      .lean();

    return NextResponse.json(getListCourses, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}