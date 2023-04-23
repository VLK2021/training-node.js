import { Router } from 'express';

import { authRouter } from './authRouter';
import { postRouter } from './postRouter';
import { userRouter } from './userRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/auth', authRouter);

// @ts-ignore
router.use('*', (err, req, res, next) => {
    res
        .status(err.code || 500)
        .json({
            message: err.message
        });
})

export const mainRouter = router;
