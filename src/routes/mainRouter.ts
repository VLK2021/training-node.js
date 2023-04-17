import { Router } from 'express';

import { postRouter } from './postRouter';
import {userRouter} from "./userRouter";


const router = Router();


router.use('/users', userRouter);
router.use('/posts', postRouter);

export const mainRouter = router;






