"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const services_1 = require("../services");
const tokenService_1 = require("../services/tokenService");
class AuthMiddleware {
    async checkAccessToken(req, res, next) {
        try {
            const authToken = req.get('Authorization');
            if (!authToken) {
                throw new Error('No token');
            }
            const { userEmail } = tokenService_1.tokenService.verifyToken(authToken);
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
}
exports.authMiddleware = new AuthMiddleware();
//# sourceMappingURL=authMiddleware.js.map