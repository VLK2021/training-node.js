import nodemailer, {SentMessageInfo} from 'nodemailer';
import EmailTemplate from 'email-templates';
import path from "path";

import {config} from '../config/config';
import {EmailActionEnum, emailInfo} from '../constants';
import {constants} from "../constants/constants";


class EmailService {
    templateRenderer = new EmailTemplate({
        views: {
            root: path.join(__dirname, '../', 'email-templates'),
        },
    });

    async sendMail(action: EmailActionEnum, userMail = '', context = {}): Promise<SentMessageInfo> {

        const {subject, templateName} = emailInfo[action];
        Object.assign(context, {frontendUrl: constants.FRONTEND_URL});

        const html = await this.templateRenderer.render(templateName, context);

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





