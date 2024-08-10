import mongoose, { model, Schema, Types, Model } from "mongoose";

export interface IEmailData {
  address?: string;
  availability?: string;
  city?: string;
  coursePriceList?: string;
  inBetweenStreet?: string;
  payways?: string;
  courseNumber?: string;
  course?: string;
}

export interface IEmail {
  section: "consult" | "contact" | "appoint";
  email: string;
  name: string;
  phone: string;
  isReaded: boolean;
  isTrash: boolean;
  isReply: boolean;
  emailData: IEmailData;
}

const EmailSchema = new Schema<IEmail>({
  section: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  name: {
    type: "String",
    required: true,
  },

  phone: {
    type: "String",
    required: true,
  },
  isReaded: {
    type: "Boolean",
    default: false,
  },
  isTrash: {
    type: "Boolean",
    default: false,
  },
  isReply: {
    type: "Boolean",
    default: false,
  },
  emailData: {
    address: {
      type: "String",
      required: false
    },
    availability: {
      type: "String",
      required: false
    },
    city: {
      type: "String",
      required: false
    },
    coursePriceList: {
      type: "String",
      required: false
    },
    inBetweenStreet: {
      type: "String",
      required: false
    },
    payways: {
      type: "String",
      required: false
    },
    courseNumber: {
      type: "String",
      required: false
    },
    course: {
      type: "String",
      required: false
    },
  },
}, {timestamps: true});


const Email: Model<IEmail> = mongoose.models.Email || model<IEmail>("Email", EmailSchema)

export default Email