import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import jwt, {JwtPayload} from 'jsonwebtoken'
import User, { IUser } from "@/models/User";
import  connectDB  from "@/database/config";

export interface AuthenticatedRequest {
    userConfirmed?: any;
}

export const validateJWT = async (req: NextRequest) => {
    await connectDB();
    const token = req.headers.get('x-token') as string

    if(!token){
        const error = {message: 'No hay un usuario logueado'}
        return NextResponse.json(error, {status: 401})
    }

    try {
        const payload = jwt.verify(token, '4dm1nKey') as JwtPayload

        const {id} = payload

        const userConfirmed: IUser | null = await User.findById(id)

        if(!userConfirmed){
            const error = {message: 'Token ingresado no valido o expirado'}
            return NextResponse.json(error, {status: 401})
        }

         // Agregar el usuario confirmado al request
        (req as AuthenticatedRequest).userConfirmed = userConfirmed
        return NextResponse.next();
        
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Token no valido'}, {status: 401})
    }

}