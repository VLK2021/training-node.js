"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const constants_1 = require("../constants/constants");
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
}
exports.authController = new AuthController();
//# sourceMappingURL=authController.js.map