import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

let transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: Number(process.env.MAILER_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILER_USER, // generated ethereal user
    pass: process.env.MAILER_PASS, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendEmail(
  organisation_name: string,
  to: string,
  subject: string,
  html: string,
  callback: (err: Error | null, info: SMTPTransport.SentMessageInfo) => void
) {
  transporter.sendMail(
    {
      from: `'"${organisation_name} MIS 👻" <${process.env.MAILER_USER}>'`, // sender address
      to, // list of receivers
      subject, // Subject line
      html, // html body
    },
    callback
  );
}

export { sendEmail };
