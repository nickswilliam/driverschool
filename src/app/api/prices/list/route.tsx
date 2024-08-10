import { priceListSchema } from "@/schemas/validation";
import connectDB from "@/database/config";
import { AuthenticatedRequest, validateJWT } from "@/middlewares/validateJWT";
import PriceList from "@/models/PriceList";
import { ObjectId } from "mongoose";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

//trae listas para select de Ef/tc y precios
export async function GET() {
  await connectDB();
  try {
    const getListCourses = await PriceList.find()
      .select("-user -createdAt -updatedAt -_id -__v")
      .lean();

    return NextResponse.json({ data: [...getListCourses] }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

//crea listas de select de ef/tc y precios *requiere auth
export async function POST(req: NextRequest) {
  await connectDB();
  await validateJWT(req);
  const userID: ObjectId = (req as AuthenticatedRequest).userConfirmed._id;
  const body = await req.json();
  try {
    const user = await User.findById(userID);
    if (user?.role !== "admin") {
      return NextResponse.json(
        {
          message: "No posee los permisos para crear el listado de precios.",
        },
        { status: 401 }
      );
    }

    const data = {
      ...body,
      user: userID,
    };

    const validation = priceListSchema.safeParse(data);

    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const newPriceList = new PriceList(data);
    await newPriceList.save();

    return NextResponse.json(newPriceList, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
