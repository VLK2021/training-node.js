"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const router = (0, express_1.Router)();
router.get('/', postController_1.postController.getAll);
router.post('/', postController_1.postController.createdPost);
router.put('/:id', postController_1.postController.updatePost);
exports.postRouter = router;
//# sourceMappingURL=postRouter.js.map