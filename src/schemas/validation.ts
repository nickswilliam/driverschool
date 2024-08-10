import { isValidObjectId } from "mongoose";
import { string, z } from "zod";


export const userSchema = z.object({
    userName: z.string().min(4, 'El nombre de usuario es requerido'),
    password: z.string().min(6, 'La contraseña es requerida'),
    apiKey: z.string().optional(),
})


export const courseListSchema = z.object({
    courseTitle: z.string().min(6, 'El titulo de curso es requerido'),
    id: z.number().min(1, "El id de titulo de curso es requerido"),
    href: z.string()
})


export const priceListSchema = z.object({
    id: z.number().min(1, 'El id es requerido'),
    paymethod: z.string().min(6, 'El metodo de pago es requerido'),
    courseList: z.array(courseListSchema),
    createdAt: z.number(),
    updatedAt: z.number()
})