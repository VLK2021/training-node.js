import { Response, NextFunction} from 'express';

import { ErrorHandler } from '../error/ErrorHandler';
import { IRequestExtended } from "../interfaces";
import { userRepository } from "../repositories/user/userRepository";


class UserMiddleware {
   async checkIsUserExist(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
        try {
            const userFromDb = await userRepository.getUserByEmail(req.body.email);
            if (!userFromDb) {
                next(new ErrorHandler('User not found', 404));
                return;
            }

            req.user = userFromDb;
            next();

        }catch (e) {
            next(e);
        }
    }

}

export const userMiddleware = new UserMiddleware();