import { Router } from 'express';

import { authRouter } from './authRouter';
import { postRouter } from './postRouter';
import { userRouter } from './userRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/auth', authRouter);

export const mainRouter = router;
