import {UpdateResult} from "typeorm";

import {IUser} from "../entity/user";
import {userRepository} from "../repositories/user/userRepository";


class UserService {
    public async getUsers(): Promise<IUser[]> {
        return userRepository.getUsers();
    }

    public async createdUser(user: IUser): Promise<IUser> {
        return userRepository.createdUser(user);
    }

    public async updateUser(id: number, password: string, email: string): Promise<UpdateResult> {
        return userRepository.updateUser(id, password, email);
    }

    public async deletedUser(id: number): Promise<UpdateResult> {
        return userRepository.deletedUser(id);
    }

}

export const userService = new UserService();