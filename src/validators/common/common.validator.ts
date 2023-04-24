import Joi from "joi";

import {constants} from "../../constants/constants";

export const commonValidator = {
    emailValidator: Joi.string().regex(constants.EMAIL_REGEXP)
}