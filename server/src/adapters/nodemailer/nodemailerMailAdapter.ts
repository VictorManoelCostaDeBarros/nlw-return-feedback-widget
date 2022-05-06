import { MailAdapter, SendMailData } from './../mailAdapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "791299bf1cfd7e",
    pass: "71d6f61c6ef7c0"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMain ({subject, body}: SendMailData) {
      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Victor Manoel <victor.manoel8@hotmail.com>',
        subject: subject,
        html: body 
      });

  };
}