import { EntityRepository, getManager, Repository } from 'typeorm';

import { IPost, Post } from '../../entity/post';
import { IPostRepository } from './postRepositoryInterface';

@EntityRepository(Post)
class PostRepository extends Repository<Post> implements IPostRepository {
    public async getAll() {
        return getManager().getRepository(Post).find();
    }

    public async createdPost(post: IPost) {
        return getManager().getRepository(Post).save(post);
    }

    public async updatePost(id: number, title: string, body: string) {
        return getManager().getRepository(Post)
            .update({ id }, {
                title,
                body,
            });
    }

    public async deletePost(id: number) {
        return getManager().getRepository(Post)
            .softDelete({ id });
    }
}

export const postReposirory = new PostRepository();
