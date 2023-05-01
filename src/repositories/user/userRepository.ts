import { EntityRepository, getManager, Repository } from 'typeorm';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { IUser, User } from '../../entity/user';
import { IUserRepository } from './userRepository.interface';


dayjs.extend(utc);

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
            .update({ id }, {
                password,
                email,
            });
    }

    public async deletedUser(id: number) {
        return getManager().getRepository(User)
            .softDelete({ id });
    }

    public async getUserByEmail(email: string) {
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }

    public async updateUserFogot(id: number, user: Partial<IUser>): Promise<object> {
        return getManager().getRepository(User)
            .update({ id }, user);
    }

    public getNewUsers(): Promise<IUser[]> {
        return getManager().getRepository(User)
            .createQueryBuilder('user')
            .where('user.createdAt >= :date', {date: dayjs().utc().startOf('day').format()})
            .getMany()
    }

}

export const userRepository = new UserRepository();
