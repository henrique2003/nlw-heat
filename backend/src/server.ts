import 'dotenv/config'
import http from 'http'
import consola from 'consola'
import { Server } from 'socket.io'

import app from './app'

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, { cors: { origin: '*' } })

serverHttp.listen(3333 || process.env.PORT, () => {
  consola.success('Server running')
})

export { io }
