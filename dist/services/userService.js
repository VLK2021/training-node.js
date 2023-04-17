"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userRepository_1 = require("../repositories/user/userRepository");
class UserService {
    async getUsers() {
        return userRepository_1.userRepository.getUsers();
    }
    async createdUser(user) {
        return userRepository_1.userRepository.createdUser(user);
    }
    async updateUser(id, password, email) {
        return userRepository_1.userRepository.updateUser(id, password, email);
    }
    async deletedUser(id) {
        return userRepository_1.userRepository.deletedUser(id);
    }
}
exports.userService = new UserService();
//# sourceMappingURL=userService.js.map