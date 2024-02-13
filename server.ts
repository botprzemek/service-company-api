import * as express from 'express'
import * as cors from 'cors'
import * as http from 'http'
import helmet from 'helmet'
import setupMail from './services/mail.service'
import router from './routes/router'

global.__basedir = __dirname

const server: express.Express = express()
const httpServer: http.Server = http.createServer(server)
const port: number = parseInt(process.env.PORT)

server.disable('x-powered-by')
server.set('trust proxy', 1)

server.options('*', cors())

server.use(cors({ origin: JSON.parse(process.env.ADDRESSES) } as cors.CorsOptions))
server.use(express.json({ limit: '100kb', type: ['application/json', 'text/plain'] }))
server.use(express.urlencoded({ limit: '100kb', parameterLimit: 100, extended: false }))
server.use(helmet())
server.use(router)

httpServer.listen(port, (): void => {
  console.log(`${new Date().toLocaleTimeString('pl-PL')} [server] listening on http://localhost:${port}`)
  setupMail()
})
