import connectDB from "@/database/config";
import CoursesPrice from "@/models/CoursesPrices";
import { NextResponse } from "next/server";



//traer los precios de los cursos
export async function GET() {
  await connectDB();
  try {
    const getCoursePrices = await CoursesPrice.find()
      .select("-user -_id -__v")
      .lean();

    return NextResponse.json(getCoursePrices, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
