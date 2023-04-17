import { UpdateResult } from "typeorm";
import { IPost } from "../entity/post";
import { postReposirory } from "../repositories/post/postRepository";


class PostService {
    public async getPosts(): Promise<IPost[]> {
        return postReposirory.getAll();
    }

    public async createdPost(post:IPost): Promise<IPost> {
        return postReposirory.createdPost(post);
    }

    public async updatePost(id: number, title: string, body: string): Promise<UpdateResult> {
        return postReposirory.updatePost(id, title, body);
    }
}

export const postService = new PostService();