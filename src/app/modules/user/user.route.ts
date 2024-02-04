import express from 'express'
import { UserController } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()

// create user
router.post(
  '/register',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
)

// get single user
router.get('/:id', UserController.getSingleUser)

export const UserRoutes = router
