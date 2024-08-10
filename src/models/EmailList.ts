import mongoose, { model, Schema, Types, Model } from "mongoose";

export interface IEmailList {
    name: string;
    email: string;
    phone: string;
}

const EmailListSchema = new Schema<IEmailList>({
    email: {
        type: "String",
        required: true,
        unique: true,
    },
    name: {
        type: "String",
        required: true,
    }, 
    phone: {
        type: "String",
        required: true,
    }
})

const EmailList: Model<IEmailList> = mongoose.models.EmailList || model<IEmailList>("EmailList", EmailListSchema)

export default EmailList