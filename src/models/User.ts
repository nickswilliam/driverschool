import mongoose, { model, Schema, Model } from "mongoose";

export interface IUser {
  userName: string;
  password: string;
  role?: string;
}

const UserSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: [true, "El nombre de usuario es obligatorio"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

//Function that only returns the USER

const User: Model<IUser> =
  mongoose.models.User || model<IUser>("User", UserSchema);
export default User;
