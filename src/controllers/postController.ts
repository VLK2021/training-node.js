import {Request, Response} from 'express';
import { UpdateResult } from 'typeorm';

import { IPost } from "../entity/post";
import { postService } from "../services/postService";


class PostController {
    public async getAll(req: Request, res: Response): Promise<Response<IPost[]>>{
        const posts = await postService.getPosts();
        return res.json(posts);
    }

    public async createdPost(req: Request, res: Response): Promise<Response<IPost[]>>{
        const createdPost = await postService.createdPost(req.body);
        return res.json(createdPost);
    }

    public async updatePost(req: Request, res: Response): Promise<Response<UpdateResult>>{
        const { title, body } = req.body;
        const { id } = req.params;
        const updatePost = await postService.updatePost(+id, title, body);
        return res.json(updatePost);
    }

    public async deletedPost(req: Request, res: Response): Promise<Response<UpdateResult>> {
        const {id } = req.params;
        const deletePost = await postService.deletePost(+id);
        return res.json(deletePost);
    }

}

export const postController = new PostController();