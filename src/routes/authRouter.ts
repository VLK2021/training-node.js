import { Router } from 'express';

import { authController } from '../controllers/authController';
import { authMiddleware, fileMiddleware, userMiddleware } from '../middlewares';

const router = Router();

router.post('/registration',
    authMiddleware.isUserValid,
    fileMiddleware.checkUserAvatar,
    authController.registration
);
router.post('/login',
    authMiddleware.isLoginValid,
    userMiddleware.checkIsUserExist,
    authController.login
);
router.post('/logout',
    authMiddleware.checkAccessToken,
    authController.logout
);
router.post('/refresh',
    authMiddleware.checkRefreshToken,
    authController.refreshToken
);

router.post('/forgotPassword',
    authMiddleware.checkValidEmail,
    userMiddleware.checkIsUserExist,
    authController.sendForgotPassword
);
router.post('/forgotPassword/set',
    authMiddleware.checkValidPass,
    authMiddleware.checkActionToken,
    authController.setPassword);

export const authRouter = router;
