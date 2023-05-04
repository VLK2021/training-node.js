"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const services_1 = require("../services");
class UserController {
    async getAll(req, res) {
        const users = await services_1.userService.getUsers();
        return res.json(users);
    }
    async createdUser(req, res) {
        const createdUser = await services_1.userService.createdUser(req.body);
        return res.json(createdUser);
    }
    async updateUser(req, res) {
        const { password, email } = req.body;
        const { id } = req.params;
        const updatedUser = await services_1.userService.updateUser(+id, password, email);
        return res.json(updatedUser);
    }
    async deletedUser(req, res) {
        const { id } = req.params;
        const deletedUser = await services_1.userService.deletedUser(+id);
        return res.json(deletedUser);
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map