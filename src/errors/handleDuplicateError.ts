import { IGenericErrorMessage } from '../interfaces/error'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (error: Record<string, any>) => {
  const path = Object.keys(error.keyPattern)[0]
  const errors: IGenericErrorMessage[] = [
    {
      path: path,
      message: `${path} is already in use`,
    },
  ]
  const statusCode = 400
  return {
    statusCode,
    message: 'Duplicate Entry',
    errorMessages: errors,
  }
}

export default handleDuplicateError
