import mongoose, { model, Schema, Types, Model } from "mongoose";

export interface ICourseList {
    courseTitle: string,
    id: number,
    href?: string;
}


export interface IPriceList {
    id: number,
    paymethod: string,
    courseList: ICourseList[],
    user: Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
}


const PriceListSchema = new Schema<IPriceList>({
    id: {
        type: "Number",
        required: true,
    },
    paymethod: {
        type: "String",
        required: true,
    },
    courseList:{
        type: [
            {
                id: {
                    type: "Number",
                    required: true,
                },
                courseTitle: {
                    type: "String",
                    required: true,
                },
                href: {
                    type: "String",
                    required: false
                }
            }
        ]
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    
}, {timestamps: true})

const PriceList: Model<IPriceList> = mongoose.models.PriceList || model<IPriceList>("PriceList", PriceListSchema)

export default PriceList
