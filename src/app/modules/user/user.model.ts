import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser>(
  {
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
)

const User = model<IUser, UserModel>('User', userSchema)

export default User
