"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
class UserController {
    async getAll(req, res) {
        const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).find();
        return res.json(users);
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map