import {EntityRepository, getManager, Repository} from "typeorm";

import {IUser, User} from "../../entity/user";
import {IUserRepository} from "./userRepository.interface";


@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async getUsers() {
        return getManager().getRepository(User).find({ relations: ['posts'] });
    }

    public async createdUser(user: IUser) {
        return getManager().getRepository(User).save(user);
    }

    public async updateUser(id: number, password: string, email: string) {
        return getManager().getRepository(User)
            .update({id}, {
                password,
                email,
            });
    }

    public async deletedUser(id: number) {
        return getManager().getRepository(User)
            .softDelete({ id });
    }

}

export const userRepository = new UserRepository();