import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';

import { authRouter } from './authRouter';
import { postRouter } from './postRouter';
import { userRouter } from './userRouter';
// @ts-ignore
import * as docs from '../docs/swagger.json';

const router = Router();

router.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/auth', authRouter);

export const mainRouter = router;
