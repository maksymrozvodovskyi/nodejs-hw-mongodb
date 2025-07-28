import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginUserShema, registerUserShema } from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  registerUserController,
  refreshUserSessionController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserShema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserShema),
  ctrlWrapper(loginUserController),
);

router.post('/logout', ctrlWrapper(logoutUserController));

router.post('/refresh', ctrlWrapper(refreshUserSessionController));

export default router;
