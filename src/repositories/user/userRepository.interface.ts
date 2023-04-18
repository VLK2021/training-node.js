import { UpdateResult } from 'typeorm';

import { IUser } from '../../entity/user';

export interface IUserRepository {
    getUsers(): Promise<IUser[]>;

    createdUser(user: IUser): Promise<IUser>;

    updateUser(id: number, password: string, email: string): Promise<UpdateResult>;

    deletedUser(id: number): Promise<UpdateResult>;

    getUserByEmail(email: string): Promise<IUser | undefined>;
}
