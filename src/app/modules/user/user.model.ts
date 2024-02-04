/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose'
import { IUser, IUserMethods, UserModel } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../../config'

const userSchema = new Schema<IUser, Record<string, never>, IUserMethods>(
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

userSchema.methods.isUserExists = async function (
  email: string,
): Promise<Partial<IUser> | null> {
  return await User.findOne({ email }, { username: 1, password: 1 })
}

userSchema.methods.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword)
}

userSchema.pre('save', async function (next) {
  const user = this
  // hashing user password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

const User = model<IUser, UserModel>('User', userSchema)

export default User
