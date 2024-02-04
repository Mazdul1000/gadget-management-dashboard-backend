import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string({
      required_error: 'Password is required',
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
      }),
    }),
    email: z.string({
      required_error: 'Phone number is required',
    }),
  }),
})

const userUpdateValidation = z.object({
  body: z.object({
    password: z
      .string({
        required_error: 'Password is required',
      })
      .optional(),
    name: z
      .object({
        firstName: z
          .string({
            required_error: 'First name is required',
          })
          .optional(),
        lastName: z
          .string({
            required_error: 'Last name is required',
          })
          .optional(),
      })
      .optional(),
    email: z.string({
      required_error: 'Phone number is required',
    }),
  }),
})
export const UserValidation = {
  createUserZodSchema,
  userUpdateValidation,
}
