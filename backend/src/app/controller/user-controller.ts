import 'dotenv/config'
import { Request, Response } from 'express'

import prismaClient from '../prisma'
import generateToken from '../../utils/generate-token'
import AuthUserService from '../services/auth-user-service'
import { badRequest, serverError, success } from '../helpers/response-helper'

class AuthUserController {
  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const { code } = req.body

      if (!code) {
        return badRequest(res, 'Missing code field')
      }

      const service = new AuthUserService()

      const { login, avatar_url, id, name } = await service.execute(code)

      let user = await prismaClient.user.findFirst({
        where: {
          github_id: id
        }
      })

      if (!user) {
        user = await prismaClient.user.create({
          data: {
            github_id: id,
            login,
            avatar_url,
            name
          }
        })
      }

      const token = generateToken(user.id)

      return success(res, { user, token })
    } catch (error) {
      return serverError(res, error.message)
    }
  }

  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const user = await prismaClient.user.findFirst({ where: { id: req.userId } })

      return success(res, user)
    } catch (error) {
      return serverError(res, error.message)
    }
  }
}

export default AuthUserController
