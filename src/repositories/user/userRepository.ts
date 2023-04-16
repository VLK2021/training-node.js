import { EntityRepository, getManager, Repository } from "typeorm";

import {User } from "../../entity/user";
import { IUserRepository } from "./userRepository.interface";


@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async getUsers() {
        return getManager().getRepository(User).find();
    }
}

export const userRepository = new UserRepository();