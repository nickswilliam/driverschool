import { userSchema } from "@/schemas/validation";
import  connectDB  from "@/database/config";
import User, { IUser } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


//crea un usuario y lo almacena en la base de datos
export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const {userName, password} = body

  const userNameExist = await User.findOne({userName})
  if(userNameExist){
    return NextResponse.json({message: "Usuario ya existente"}, {status: 400})
  }

  const validation = userSchema.safeParse(body)
  if(!validation.success){
    return NextResponse.json(validation.error.format(), {status: 400})
  }

  const user = new User({userName, password});


  const salt = bcryptjs.genSaltSync()

  user.password = bcryptjs.hashSync(body.password, salt)

  await user.save();

  return NextResponse.json(user, {status: 201})
}
