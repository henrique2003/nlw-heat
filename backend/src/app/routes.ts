import { Router } from 'express'

import { auth } from './middlewares/auth'
import { AuthUserController, MessageController, ServiceAuthController } from './controller'

const routes = Router()

const serviceAuthController = new ServiceAuthController()
const authUserController = new AuthUserController()
const messageController = new MessageController()

routes.get('/github', serviceAuthController.githubAuth)
routes.get('/signin/callback', serviceAuthController.githubAuthCallback)

routes.post('/authenticate', authUserController.store)
routes.get('/profile', auth, authUserController.index)
routes.post('/message', auth, messageController.store)
routes.get('/last/messages', messageController.getLastsMessages)

export default routes
