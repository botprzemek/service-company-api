import { MailOptions } from 'nodemailer/lib/sendmail-transport'
import mail from '../mail.service'
import config from '../../configs/default.config'
import * as fs from 'fs'
import * as path from 'path'

export default function (receiver: string): void {
  const date: Date = new Date()
  const fileName: string = `raport_${date.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' }).split(' ').join('_')}.xlsx`
  const filePath: string = path.join(global.__basedir, `/files/reports/${fileName}`)
  const file: Buffer = fs.readFileSync(filePath)
  if (!mail()) return
  const mailOptions: MailOptions = {
    from: `${config.name} <${config.email}>`,
    to: receiver,
    subject: 'Testowy mail',
    html: '<h1>Test</h1>',
    attachments: [
      {
        filename: fileName,
        content: file,
      },
    ],
  }
  mail().sendMail(mailOptions, (error: Error): void =>
    error
      ? console.log(`${new Date().toLocaleTimeString('pl-PL')} [mail] error occurred while sending mail (${error})`)
      : console.log(`${new Date().toLocaleTimeString('pl-PL')} [mail] sent mail to ${receiver}`),
  )
}
