import {z} from 'zod'

const priceListSchema = z.object({
    id: z.number().min(1, 'Es requerido un número de id'),
    paymethod: z.string().min(4, 'Es requerido ingresar el campo de metodo de pagos'),

})