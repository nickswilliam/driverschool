import connectDB from "@/database/config";
import { authOptions } from "@/lib/auth-options";
import CoursesPrice, { ICoursesPrices } from "@/models/CoursesPrices";
import { getServerSession } from "next-auth";
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

export async function PATCH(req: NextRequest, { params }: { params: { id: string }}) {
    const {id} = params

    const body: ICoursesPrices = await req.json()
    try {
        await connectDB()

        const session = await getServerSession(authOptions)

        if(!session?.user){
            return NextResponse.json({message: "No hay usuario logueado"}, {status: 400})
        }

        if(session?.user.role !== "admin"){
            return NextResponse.json({message: "Usuario no autorizado a realizar esta acción"})
        }

        const updateCourse = await CoursesPrice.findOneAndUpdate({id}, body, {new: true})

        if(!updateCourse){
            return NextResponse.json({message: "Error al intentar actualizar"}, {status: 400})
        }

        return NextResponse.json({message: "Listado actualizado"}, {status: 201})
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}