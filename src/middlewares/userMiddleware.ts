import { Response, NextFunction} from 'express';

import { IRequestExtended } from "../interfaces";
import { userRepository } from "../repositories/user/userRepository";


class UserMiddleware {
   async checkIsUserExist(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
        try {
            const userFromDb = await userRepository.getUserByEmail(req.body.email);
            if (!userFromDb) {
                res.status(404).json('User not found');
                return;
            }

            req.user = userFromDb;
            next();

        }catch (e) {
            res.status(400).json(e);
        }
    }

}

export const userMiddleware = new UserMiddleware();