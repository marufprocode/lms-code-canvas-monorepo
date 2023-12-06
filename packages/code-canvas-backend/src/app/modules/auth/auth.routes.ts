import express from 'express';
import {
  checkUserAvailability,
  getRefreshToken,
  loginUser,
  logoutUser,
  singUpAdmin,
  singUpUser,
  updatePassword,
} from './auth.controllers';
import checkAuth from '../../middlewares/auth';

const authRoutes = express.Router();

authRoutes.get('/user-availability', checkUserAvailability); //accept email and user_name query 

authRoutes.post('/signup', singUpUser);

authRoutes.post('/signup-admin', singUpAdmin);

authRoutes.post('/login', loginUser);

authRoutes.post('/refresh-token', getRefreshToken);

authRoutes.patch('/change-password', checkAuth(), updatePassword);

authRoutes.get('/logout', checkAuth(), logoutUser);

export default authRoutes;
