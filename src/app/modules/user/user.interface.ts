import { Model } from 'mongoose'

export type IUser = {
  password: string
  name: {
    firstName: string
    lastName: string
  }
  email: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
