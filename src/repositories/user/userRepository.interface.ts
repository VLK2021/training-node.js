import { IUser } from "../../entity/user";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>;
}