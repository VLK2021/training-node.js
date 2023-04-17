"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postService = void 0;
const postRepository_1 = require("../repositories/post/postRepository");
class PostService {
    async getPosts() {
        return postRepository_1.postReposirory.getAll();
    }
    async createdPost(post) {
        return postRepository_1.postReposirory.createdPost(post);
    }
    async updatePost(id, title, body) {
        return postRepository_1.postReposirory.updatePost(id, title, body);
    }
    async deletePost(id) {
        return postRepository_1.postReposirory.deletePost(id);
    }
}
exports.postService = new PostService();
//# sourceMappingURL=postService.js.map