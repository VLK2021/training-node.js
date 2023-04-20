import { UpdateResult } from 'typeorm';
import bcrypt from 'bcrypt';

import { IUser } from '../entity/user';
import { userRepository } from '../repositories/user/userRepository';

class UserService {
    public async getUsers(): Promise<IUser[]> {
        return userRepository.getUsers();
    }

    public async createdUser(user: IUser): Promise<IUser> {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };

        return userRepository.createdUser(dataToSave);
    }

    public async updateUser(id: number, password: string, email: string): Promise<UpdateResult> {
        return userRepository.updateUser(id, password, email);
    }

    public async deletedUser(id: number): Promise<UpdateResult> {
        return userRepository.deletedUser(id);
    }

    public async getUserByEmail(email: string): Promise<IUser | undefined> {
        return userRepository.getUserByEmail(email);
    }

    public async compereUserPassword(password: string, hash: string): Promise<void | Error> {
        const isPasswordUnique =  await bcrypt.compare(password, hash);

        if (!isPasswordUnique) {
            throw new Error('User no exist!');
        }
    }

    private async _hashPassword(password: string): Promise<string> {
        return  await bcrypt.hash(password, 10);
    }
}

export const userService = new UserService();
