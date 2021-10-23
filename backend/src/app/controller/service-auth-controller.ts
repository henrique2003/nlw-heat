import 'dotenv/config'
import { Request, Response } from 'express'

class ServiceAuthController {
  public async githubAuth (req: Request, res: Response): Promise<Response | any> {
    try {
      res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
    } catch (error) {}
  }

  public async githubAuthCallback (req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).send(req.query.code)
    } catch (error) {}
  }
}

export default ServiceAuthController
