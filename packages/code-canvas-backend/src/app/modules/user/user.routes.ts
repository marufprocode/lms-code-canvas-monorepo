import express from 'express';
import checkAuth from '../../middlewares/auth';
import { deleteUserById, getAllUsers, getUserById, updateUserById } from './user.controllers';

const userRoutes = express.Router();

userRoutes.get('/', getAllUsers);

userRoutes.get('/:id', getUserById);

userRoutes.patch('/:id', updateUserById);

userRoutes.patch('/:id', checkAuth(), deleteUserById);

export default userRoutes;