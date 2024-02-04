import { IUser } from './user.interface'
import User from './user.model'

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload)
  return result
}

const getSingleUser = async (payload: string): Promise<IUser | null> => {
  const result = await User.findById(payload)
  return result
}

export const UserService = {
  createUser,
  getSingleUser,
}
