"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const postService_1 = require("../services/postService");
class PostController {
    async getAll(req, res) {
        const posts = await postService_1.postService.getPosts();
        return res.json(posts);
    }
    async createdPost(req, res) {
        const createdPost = await postService_1.postService.createdPost(req.body);
        return res.json(createdPost);
    }
    async updatePost(req, res) {
        const { title, body } = req.body;
        const { id } = req.params;
        const updatePost = await postService_1.postService.updatePost(+id, title, body);
        return res.json(updatePost);
    }
}
exports.postController = new PostController();
//# sourceMappingURL=postController.js.map