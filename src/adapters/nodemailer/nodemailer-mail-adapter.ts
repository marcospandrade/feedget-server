import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '8693e33018d323',
        pass: 'b875777d5fafa5'
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Marcos Andrade <marcos@gmail.com>',
            subject,
            html: body
        });
    }
}
