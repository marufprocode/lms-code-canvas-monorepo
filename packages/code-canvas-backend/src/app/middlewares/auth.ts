import { RequestHandler } from 'express';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import { verifyJWT_Token } from '../../shared/utils/jwt/verifyJWT_Token';
import { JWT_SECRET_KEY } from '../../config';
import { JwtPayload } from 'jsonwebtoken';

const checkAuth =
  (...acceptedRoles: string[]): RequestHandler =>
  async (req, res, next) => {
    try {
      const token: string | undefined = req.headers.authorization as string;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'No token !');
      }
      const verifiedUser: JwtPayload | null = await verifyJWT_Token(
        token,
        JWT_SECRET_KEY as string
      );

      if (!verifiedUser) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Not authorized!');
      }

      const { role } = verifiedUser;

      if (acceptedRoles.length && !acceptedRoles.includes(role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden access!');
      }

      // Store the verified token or user information in the request object
      req.user = verifiedUser as JwtPayload;

      next();
    } catch (error) {
      next(error);
    }
  };

export default checkAuth;
