import {EmailActionEnum} from './enums';


export const emailInfo = {
    [EmailActionEnum.WELCOME]: {
        subject: 'Welcome to SEP-2021',
        templateName: 'welcome'
    },

    [EmailActionEnum.ACCOUNT_BLOCKED]: {
        subject: 'You account was blocked',
        templateName: 'accountDlocked'
    },

    [EmailActionEnum.FORGOT_PASSWORD]: {
        subject: 'dont worry, update your pass',
        templateName: 'forgotPassword'
    },


}