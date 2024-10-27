import mongoose, { model, Schema, Types, Model, ObjectId } from "mongoose";

export interface IListItems {
  item: string;
  id: number;
}

export interface ICoursesPrices {
  id: number;
  title: string;
  price: number;
  btnText: string;
  listItems: IListItems[];
  user: Types.ObjectId;
}

const CoursesPriceSchema = new Schema<ICoursesPrices>({
  id: {
    type: "Number",
    required: true,
  },
  title: {
    type: "String",
    required: true,
  },
  price: {
    type: "Number",
    required: true,
  },
  btnText: {
    type: "String",
    required: true,
  },
  listItems: {
    type: [
        {
            item: {
                type: "String",
                required: true
            },
            id: {
                type: "Number",
                required: true,
            }
        }
    ],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {timestamps: true});


const CoursesPrice: Model<ICoursesPrices> = mongoose.models.CoursesPrice || model<ICoursesPrices>("CoursesPrice", CoursesPriceSchema)

export default CoursesPrice;
