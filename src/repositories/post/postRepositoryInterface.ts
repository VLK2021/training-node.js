import { UpdateResult } from "typeorm";
import {IPost} from "../../entity/post";


export interface IPostRepository {
    getAll(): Promise<IPost[]>;

    createdPost(post: IPost): Promise<IPost>;

    updatePost(id: number, title: string, body: string): Promise<UpdateResult>;

    deletePost(id: number): Promise<UpdateResult>;
}