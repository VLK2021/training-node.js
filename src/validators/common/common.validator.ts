import { Joi } from "celebrate";

import { constants } from "../../constants/constants";

export const commonValidator = {
    emailValidator: Joi.string().regex(constants.EMAIL_REGEXP)
}