"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const tokenService_1 = require("./tokenService");
const userService_1 = require("./userService");
class AuthService {
    async registration(body) {
        const { email } = body;
        const userFromDb = await userService_1.userService.getUserByEmail(email);
        if (userFromDb) {
            throw new Error(`User with amail: ${email} already exists`);
        }
        const createdUser = await userService_1.userService.createdUser(body);
        return this._getTokenData(createdUser);
    }
    async _getTokenData(userData) {
        const { id, email } = userData;
        const tokensPair = await tokenService_1.tokenService.generateTokenPair({ userId: id, userEmail: email });
        await tokenService_1.tokenService.saveToken(id, tokensPair.refreshToken);
        return {
            ...tokensPair,
            userId: id,
            userEmail: email,
        };
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=authService.js.map