import { Router } from 'express';

import { postController } from '../controllers/postController';


const router = Router();

router.get('/', postController.getAll);
router.post('/', postController.createdPost);
router.put('/:id', postController.updatePost);

export const postRouter = router;