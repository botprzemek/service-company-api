import * as dotenv from 'dotenv'
import { createTransport, Transporter } from 'nodemailer'
import { TransportConfig } from '../models/mail.model'

dotenv.config()

let transport = null

export default (): Transporter => {
  if (transport) return transport
  const config: TransportConfig = {
    host: process.env.MAIL_URL,
    port: parseInt(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  }

  try {
    transport = createTransport(config)
    console.log(`${new Date().toLocaleTimeString('pl-PL')} [mail] connected to mail`)
  } catch (error) {
    console.log(`${new Date().toLocaleTimeString('pl-PL')} [mail] unable to connect to mail (check your configuration) ${error}`)
    return null
  }
  return transport
}
