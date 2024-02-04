import { z } from 'zod'

const loginZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email must be provided',
    }),
    password: z.string({
      required_error: 'Password must be provided',
    }),
  }),
})
const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'refresh token must be provided',
    }),
  }),
})
const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password must be provided',
    }),
    newPassword: z.string({
      required_error: 'New password must be provided',
    }),
  }),
})

export const AuthValidation = {
  loginZodSchema,
  refreshTokenZodSchema,
  changePasswordZodSchema,
}
