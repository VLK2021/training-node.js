"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/registration');
router.post('/login');
router.post('/logout');
router.post('/refresh');
exports.authRouter = router;
//# sourceMappingURL=authRouter.js.map