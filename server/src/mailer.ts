import nodemailer from 'nodemailer';

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

async function sendEmail(to: string, subject: string, html: string) {
  let info = await transporter.sendMail({
    from: `'"EWSC MIS 👻" <${process.env.MAILER_USER}>'`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });

  console.log('Message Info:', info);

  console.log('Message sent: %s', info.messageId);
}

export { sendEmail };
