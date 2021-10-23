import express, { Application } from 'express'
import cors from 'cors'

import routes from './app/routes'

class App {
  public readonly express: Application

  constructor () {
    this.express = express()
    this.middlewares()
  }

  middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(routes)
  }
}

export default new App().express
