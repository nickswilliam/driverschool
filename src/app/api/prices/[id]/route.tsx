import connectDB from "@/database/config";
import { AuthenticatedRequest, validateJWT } from "@/middlewares/validateJWT";
import CoursesPrice from "@/models/CoursesPrices";
import User from "@/models/User";
import { coursePriceSchema, priceListSchema } from "@/schemas/validation";
import { ObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

//traer los precios de curso x id
export async function GET(req: NextRequest, { params }: { params: { id: string } }){
    const {id} = params
    await connectDB();
    try {
        const getCoursePrices = await CoursesPrice.findOne({id}).select("-user -createdAt -updatedAt -_id -__v").lean();

        return NextResponse.json(getCoursePrices, {status: 200})
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}