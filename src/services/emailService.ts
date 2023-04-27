import nodemailer, { SentMessageInfo } from 'nodemailer';
import EmailTemplate from 'email-templates';
import path from "path";

import {config} from '../config/config';
import { emailActionEnum, emailInfo } from '../constants';


class EmailService {
    templateRenderer = new EmailTemplate({
        views: {
            root: path.join(__dirname, '../', 'email-templates'),
        },
    });

    async sendMail(userMail: string, action: emailActionEnum, context= {}): Promise<SentMessageInfo> {

        const {subject, templateName} = emailInfo[action];

        // console.log(__dirname, '__dirname');
        // console.log(path.join(__dirname, '../', 'email-templates'), 'address nazad');

        Object.assign(context, {frontendUrl: 'https://google.com'})

        const html = await this.templateRenderer.render(templateName, context)

        const emailTransporter = nodemailer.createTransport({
            from: 'No Reply Sept-2021',
            service: 'gmail',
            auth: {
               user: config.NO_REPLY_EMAIL,
                pass: config.NO_REPLY_EMAIL_PASSWORD
            }
        });

        return emailTransporter.sendMail({
            to: userMail,
            subject,
            html,
        });
    }

}

export const emailService = new EmailService();