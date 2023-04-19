import { Request, Response } from 'express';
import { UpdateResult } from 'typeorm';

import { IUser } from '../entity/user';
import { userService } from '../services';

class UserController {
    public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.getUsers();
        return res.json(users);
    }

    public async createdUser(req: Request, res: Response): Promise<Response<IUser[]>> {
        const createdUser = await userService.createdUser(req.body);
        return res.json(createdUser);
    }

    public async updateUser(req: Request, res: Response): Promise<Response<UpdateResult>> {
        const { password, email } = req.body;
        const { id } = req.params;
        const updatedUser = await userService.updateUser(+id, password, email);
        return res.json(updatedUser);
    }

    public async deletedUser(req: Request, res: Response): Promise<Response<UpdateResult>> {
        const { id } = req.params;
        const deletedUser = await userService.deletedUser(+id);
        return res.json(deletedUser);
    }
}

export const userController = new UserController();
