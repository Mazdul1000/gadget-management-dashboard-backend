import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { AuthService } from './auth.service'
import sendResponse from '../../../shared/sendResponse'
import { ILoginUserResponse, IRefreshTokenResponse } from './auth.interface'
import config from '../../../config'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body

  const result = await AuthService.loginUser(loginData)
  const { refreshToken, ...data } = result

  //    set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  }
  res.cookie('refreshToken', refreshToken, cookieOptions)

  sendResponse<ILoginUserResponse>(res, {
    success: true,
    statusCode: 200,
    message: 'User logged in successfully',
    data: data,
  })
})
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies
  const result = await AuthService.refreshToken(refreshToken)

  //    set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  }
  res.cookie('refreshToken', refreshToken, cookieOptions)

  sendResponse<IRefreshTokenResponse>(res, {
    success: true,
    statusCode: 200,
    message: 'Access token retrived successfully',
    data: result,
  })
})

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const user = req.user
  const { ...passwordData } = req.body

  const result = await AuthService.changePassword(user, passwordData)

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Password has changed successfully',
    data: result,
  })
})

export const AuthController = {
  loginUser,
  refreshToken,
  changePassword,
}
