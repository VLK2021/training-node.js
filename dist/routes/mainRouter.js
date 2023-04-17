"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const authRouter_1 = require("./authRouter");
const postRouter_1 = require("./postRouter");
const userRouter_1 = require("./userRouter");
const router = (0, express_1.Router)();
router.use('/users', userRouter_1.userRouter);
router.use('/posts', postRouter_1.postRouter);
router.use('/auth', authRouter_1.authRouter);
exports.mainRouter = router;
//# sourceMappingURL=mainRouter.js.map