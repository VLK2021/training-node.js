"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReposirory = void 0;
const typeorm_1 = require("typeorm");
const post_1 = require("../../entity/post");
let PostRepository = class PostRepository extends typeorm_1.Repository {
    async getAll() {
        return (0, typeorm_1.getManager)().getRepository(post_1.Post).find();
    }
    async createdPost(post) {
        return (0, typeorm_1.getManager)().getRepository(post_1.Post).save(post);
    }
    async updatePost(id, title, body) {
        return (0, typeorm_1.getManager)().getRepository(post_1.Post)
            .update({ id }, {
            title,
            body,
        });
    }
};
PostRepository = __decorate([
    (0, typeorm_1.EntityRepository)(post_1.Post)
], PostRepository);
exports.postReposirory = new PostRepository();
//# sourceMappingURL=postRepository.js.map