import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller'

const router = express.Router()

// login user
router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser,
)

// refresh token
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken,
)

// change password
router.post(
  '/change-password',
  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthController.changePassword,
)

export const AuthRoutes = router
