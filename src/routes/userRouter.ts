import { Router } from 'express';

import { userController } from '../controllers/userController';

const router = Router();

// router.get('/', userController.getAll);
router.get('/', userController.getUserPagination);
router.post('/', userController.createdUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deletedUser);

export const userRouter = router;
