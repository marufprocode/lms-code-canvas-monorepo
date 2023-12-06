import express from 'express';
import auth from '../app/middlewares/auth';
import authRoutes from '../app/modules/auth/auth.routes';
import userRoutes from '../app/modules/user/user.routes';

const router = express.Router();

// shared routes
const defaultRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
];

defaultRoutes.forEach(route => router.use(route.path, route.route));

export default router;
