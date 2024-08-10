import { userSchema } from "@/schemas/validation";
import  connectDB  from "@/database/config";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { generateJWT } from "@/helpers/generateJWT";


//recibe datos de login de usuario a través de formulario
export async function POST(req: NextRequest) {
    await connectDB();
    const body = await req.json();
    const {userName, password} = body
  
    const validation = userSchema.safeParse(body)
    if(!validation.success){
      return NextResponse.json(validation.error.format(), {status: 400})
    }
    
    try {
        const user = await User.findOne({userName})

        if(!user){
            return NextResponse.json({message: 'El nombre de usuario no corresponde a un usuario registrado'}, {status: 400})
        }

        const validatePassword = bcryptjs.compareSync(password, user.password)
        if(!validatePassword){
            return NextResponse.json({message: 'La contraseña ingresada, es incorrecta'}, {status: 400})
        }

        const token = await generateJWT(user.id)

        return NextResponse.json({
            user,
            token,
        }, {status: 201})

    } catch (error) {
        console.error(error);
        return NextResponse.json({message: 'Error en el servidor'}, {status: 500})
        
    }
}
