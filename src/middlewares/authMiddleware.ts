import {NextFunction, Response} from "express";

import {userService, tokenService} from "../services";
import {IRequestExtended} from "../interfaces";
import {tokenRepository} from "../repositories/token/tokenRepository";
import {authValidator} from "../validators";
import {ErrorHandler} from "../error/ErrorHandler";
import {constants} from '../constants';


class AuthMiddleware {
    public async checkAccessToken(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const accessToken = req.get(constants.AUTHORIZATION);

            if (!accessToken) {
                throw new Error('No token');
            }

            const {userEmail} = tokenService.verifyToken(accessToken);

            const tokenPairFromDB = await tokenRepository.findByParams({accessToken});
            if (!tokenPairFromDB) {
                throw new Error('Token not valid');
            }

            const userFromToken = await userService.getUserByEmail(userEmail);
            if (!userFromToken) {
                throw new Error('Token not valid');
            }

            req.user = userFromToken;

            next();

        } catch (e: any) {
            res.json({
                status: 400,
                message: e.message,
            })

        }

    }

    public async checkRefreshToken(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const refreshToken = req.get('Authorization');

            if (!refreshToken) {
                next(new Error('No token'));
                return;
            }

            const {userEmail} = tokenService.verifyToken(refreshToken, 'refresh');

            const tokenPairFromDB = await tokenRepository.findByParams({refreshToken});
            if (!tokenPairFromDB) {
                next(new Error('Token not valid'));
                return;
            }

            const userFromToken = await userService.getUserByEmail(userEmail);
            if (!userFromToken) {
                next(new Error('Token not valid'));
                return;
            }

            req.user = userFromToken;

            next();

        } catch (e: any) {
            res.json({
                status: 400,
                message: e.message,
            })

        }

    }

    // VALIDATORS
    public isLoginValid(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const {error, value} = authValidator.login.validate(req.body);
            if (error) {
                next(new ErrorHandler(error.details[0].message));
                return;
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    }

//valid registration
    public isUserValid(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const {error, value} = authValidator.createUser.validate(req.body);
            if (error) {
                next(new ErrorHandler(error.details[0].message));
                return;
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();

