import {NextFunction, Request, Response } from 'express';
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

    public async getUserPagination(req: Request, res: Response, next: NextFunction) {
        try {
            // https://auto.ria.com/uk/search/?
            // categories.main.id=1&
            // price.currency=1&
            // price.USD.gte=2000&
            // price.USD.lte=9000&
            // indexName=auto,order_auto,newauto_search&
            // brand.id[0]=29&
            // model.id[0]=1268&
            // year[0].gte=2007&
            // year[0].lte=2019&
            // size=20
            const {page = 1, perPage = 25, ...other} = req.query;

            const userPagination = await userService.getUserPagination(other, +page, +perPage);

            res.json(userPagination);
        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController();
