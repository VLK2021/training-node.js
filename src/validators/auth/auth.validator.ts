import * as Joi from 'joi';

import {commonValidator} from '../common/common.validator';


export const authValidator = {
    login: Joi.object({
        email: commonValidator.emailValidator.message('Email not valid').trim(),
        password: Joi.string().required().min(8).message('Password not valid').trim()
    }),

    createUser: Joi.object({
        firstName: Joi.string().min(2).max(20).required(),
        lastName: Joi.string().min(2).max(20).required(),
        age: Joi.number().min(1).max(100),
        city: Joi.string().min(3).max(20).required(),
        phone: Joi.string().required(),
        email: commonValidator.emailValidator.message('Email not valid').trim(),
        password: Joi.string().required().min(8).message('Password not valid').trim()
    }),

};