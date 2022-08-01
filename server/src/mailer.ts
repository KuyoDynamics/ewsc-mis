import { EmailStatus } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { GraphQLContext } from './utils';

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

async function sendInvitation(
  email: string,
  invitation_id: string,
  organisation_name: string,
  context: GraphQLContext
) {
  try {
    const url = `${process.env.HOST_URL}//signup?id=${invitation_id}`;
    await sendEmail(
      organisation_name,
      email,
      `${organisation_name} MIS Invitation`,
      `<p>To join and start using the ${organisation_name} MIS, please click on the link below. If clicking does not work, copy the url and paste in the broswer:</p>
      <br/>
      <a href=${url}>${url}<a/>`,
      async (err, information) => {
        const emailStatus: EmailStatus = err
          ? EmailStatus.FAILED
          : information?.accepted?.indexOf(email) > -1
          ? EmailStatus.SENT
          : EmailStatus.REJECTED;
        try {
          const result = await context.prisma.userInvitation.update({
            where: {
              id: invitation_id,
            },
            data: {
              email_status: emailStatus,
            },
          });

          context.pubSub.publish('USER_INVITATION_UPDATED', {
            userInvitationUpdated: result,
          });
        } catch (error) {
          console.log(
            'Error during email sending. Failed to update Invitation Email Status:',
            error
          );
        }
      }
    );
  } catch (error) {
    console.log('Error occured during sending email for UserInvitation', error);
  }
}

export { sendEmail, sendInvitation };
