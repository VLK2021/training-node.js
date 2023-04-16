import {getManager} from "typeorm";
import { Request, Response } from 'express';

import {IUser, User} from "../entity/user";


class UserController {
    public async getAll(req: Request, res: Response) : Promise<Response<IUser[]>> {
    const users = await getManager().getRepository(User).find();
    return res.json(users);
}

}

export const userController = new UserController();