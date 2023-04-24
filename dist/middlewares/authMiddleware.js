"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const services_1 = require("../services");
const tokenRepository_1 = require("../repositories/token/tokenRepository");
const validators_1 = require("../validators");
const ErrorHandler_1 = require("../error/ErrorHandler");
const constants_1 = require("../constants");
class AuthMiddleware {
    async checkAccessToken(req, res, next) {
        try {
            const accessToken = req.get(constants_1.constants.AUTHORIZATION);
            if (!accessToken) {
                throw new Error('No token');
            }
            const { userEmail } = services_1.tokenService.verifyToken(accessToken);
            const tokenPairFromDB = await tokenRepository_1.tokenRepository.findByParams({ accessToken });
            if (!tokenPairFromDB) {
                throw new Error('Token not valid');
            }
            const userFromToken = await services_1.userService.getUserByEmail(userEmail);
            if (!userFromToken) {
                throw new Error('Wrong token');
            }
            req.user = userFromToken;
            next();
        }
        catch (e) {
            res.json({
                status: 400,
                message: e.message,
            });
        }
    }
    async checkRefreshToken(req, res, next) {
        try {
            const refreshToken = req.get('Authorization');
            if (!refreshToken) {
                throw new Error('No token');
            }
            const { userEmail } = services_1.tokenService.verifyToken(refreshToken, 'refresh');
            const tokenPairFromDB = await tokenRepository_1.tokenRepository.findByParams({ refreshToken });
            if (!tokenPairFromDB) {
                throw new Error('Token not valid');
            }
            const userFromToken = await services_1.userService.getUserByEmail(userEmail);
            if (!userFromToken) {
                throw new Error('Wrong token');
            }
            req.user = userFromToken;
            next();
        }
        catch (e) {
            res.json({
                status: 400,
                message: e.message,
            });
        }
    }
    // VALIDATORS
    isLoginValid(req, res, next) {
        try {
            const { error, value } = validators_1.authValidator.login.validate(req.body);
            if (error) {
                next(new ErrorHandler_1.ErrorHandler(error.details[0].message));
                return;
            }
            req.body = value;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.authMiddleware = new AuthMiddleware();
//# sourceMappingURL=authMiddleware.js.map