import { NextFunction, Request, Response } from 'express'
import ApiError from '../../errors/ApiError'
import { jwtHelpers } from '../../helpers/jwtHelpers'
import config from '../../config'
import { Secret } from 'jsonwebtoken'

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // get authorization token
      const token = req.headers.authorization
      if (!token) {
        {
          throw new ApiError(401, 'Authorization Required')
        }
      }
      // verify token
      let verfiedToken = null
      verfiedToken = jwtHelpers.verifyToken(token, config.jwt.secret as Secret)

      if (!verfiedToken) {
        throw new ApiError(401, 'Invalid token')
      }
      req.user = verfiedToken

      //   verify authorization
      if (requiredRoles.length && !requiredRoles.includes(verfiedToken.role)) {
        throw new ApiError(403, 'Access denied')
      }
    } catch (error) {
      next(error)
    }
    next()
  }

export default auth
