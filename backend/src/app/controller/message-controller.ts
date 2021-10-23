import 'dotenv/config'
import { Request, Response } from 'express'

import { io } from '../../server'
import { success, serverError, badRequest } from '../helpers/response-helper'
import prismaClient from '../prisma'

class MessageController {
  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const { text } = req.body

      if (!text) {
        return badRequest(res, 'Missing text field')
      }

      const message = await prismaClient.message.create({
        data: {
          text,
          user_id: req.userId
        },
        include: {
          user: true
        }
      })

      io.emit('new_message', message)

      return success(res, message)
    } catch (error) {
      return serverError(res, error.message)
    }
  }

  public async getLastsMessages (req: Request, res: Response): Promise<Response> {
    try {
      const message = await prismaClient.message.findMany({
        take: 3,
        orderBy: {
          created_at: 'desc'
        },
        include: {
          user: true
        }
      })

      return success(res, message)
    } catch (error) {
      return serverError(res, error.message)
    }
  }
}

export default MessageController
