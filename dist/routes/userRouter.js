"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.userController.getAll);
router.post('/', userController_1.userController.createdUser);
router.put('/:id', userController_1.userController.updateUser);
router.delete('/:id', userController_1.userController.deletedUser);
exports.userRouter = router;
//# sourceMappingURL=userRouter.js.map