"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const constants_1 = require("../constants/constants");
const tokenRepository_1 = require("../repositories/token/tokenRepository");
const services_1 = require("../services");
class AuthController {
    async registration(req, res) {
        const data = await services_1.authService.registration(req.body);
        res.cookie(constants_1.COOKIE.nameRefreshToken, data.refreshToken, { maxAge: constants_1.COOKIE.maxAgeRefreshToken, httpOnly: true });
        return res.json(data);
    }
    async logout(req, res) {
        const { id } = req.user;
        res.clearCookie(constants_1.COOKIE.nameRefreshToken);
        await services_1.tokenService.deleteUserTokenPair(id);
        return res.json('Ok');
    }
    async login(req, res) {
        try {
            const { id, email, password: hashPassword } = req.user;
            const { password } = req.body;
            await services_1.userService.compereUserPassword(password, hashPassword);
            const { refreshToken, accessToken } = services_1.tokenService.generateTokenPair({ userId: id, userEmail: email });
            await tokenRepository_1.tokenRepository.createToken({ refreshToken, accessToken, userId: id });
            res.json({
                refreshToken,
                accessToken,
                user: req.user
            });
        }
        catch (e) {
            res.status(400).json(e);
        }
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map