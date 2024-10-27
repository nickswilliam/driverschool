import connectDB from "@/database/config";
import { AuthenticatedRequest, validateJWT } from "@/middlewares/validateJWT";
import CoursesPrice from "@/models/CoursesPrices";
import User from "@/models/User";
import { coursePriceSchema, priceListSchema } from "@/schemas/validation";
import { ObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

//traer los precios de los cursos
export async function GET(){
    await connectDB();
    try {
        const getCoursePrices = await CoursesPrice.find().select("-user -createdAt -updatedAt -_id -__v").lean();

        return NextResponse.json(getCoursePrices, {status: 200})
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}

//crear precios de los cursos *requiere auth
export async function POST(req: NextRequest){
    await connectDB()
    await validateJWT(req)
    const userId: ObjectId = (req as AuthenticatedRequest).userConfirmed._id
    const body = await req.json();

    try {
        const user = await User.findById(userId)
        if(user?.role !== 'admin'){
            return NextResponse.json( {message: "No posee permisos para crear precios de cursos."}, {status: 401})
        }

        const data = {
            ...body,
            user: userId
        }

        const validation = coursePriceSchema.safeParse(data)


        if(!validation.success){
            return NextResponse.json(validation.error.format(), {status: 400})
        }

        const newCoursePrices = new CoursesPrice(data)

        await newCoursePrices.save()

        return NextResponse.json(newCoursePrices, {status: 201})
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}

//actualiza el precio de los cursos *requiere auth
export async function PATCH(req: NextRequest){

}