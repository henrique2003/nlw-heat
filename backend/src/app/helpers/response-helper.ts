import { Response } from 'express'

export function badRequest (res: Response, error: string): Response {
  return res.status(400).json({ error })
}

export function unauthorized (res: Response, error: any): Response {
  return res.status(401).json({ error })
}

export function serverError (res: Response, error: any): Response {
  return res.status(500).json({ error })
}

export function success (res: Response, data: any): Response {
  return res.status(200).json(data)
}
