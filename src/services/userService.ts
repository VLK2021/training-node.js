import { IUser } from "../entity/user";
import { userRepository } from "../repositories/user/userRepository";


class UserService {
    public  async getUsers(): Promise<IUser[]>{
        return userRepository.getUsers();
    }

}

export const userService = new UserService();