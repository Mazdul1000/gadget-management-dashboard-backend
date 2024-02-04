import { Model, ObjectId } from 'mongoose'

export type IUser = {
  _id?: ObjectId
  password: string
  name: {
    firstName: string
    lastName: string
  }
  email: string
}

export type IUserMethods = {
  isUserExists(username: string): Promise<Partial<IUser> | null>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
}

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>
