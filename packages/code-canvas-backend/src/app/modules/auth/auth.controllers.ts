import { Request, Response } from 'express';
import catchAsync from '../../../shared/utils/catchAsync';
import { ISignUpBody } from './auth.interfaces';
import User from '../user/user.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/utils/sendResponse';
import { IUser } from '../user/user.interface';
import pick from '../../../shared/utils/pick';

export const checkUserAvailability = catchAsync(
  async (req: Request, res: Response) => {
    const query = pick(req.query, ['email', 'user_name']);

    if(!Object.keys(query)?.length){
        throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Query Parameter")
    }

    const isUserExist = await User.isUserExist(query);

    if (isUserExist) {
      throw new ApiError(
        httpStatus.FORBIDDEN,
        `This ${Object.keys(query)[0]} is not available`
      );
    }

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: `This ${Object.keys(query)[0]} is available`,
    });
  }
);

export const singUpUser = catchAsync(async (req: Request, res: Response) => {
  const signUpData: ISignUpBody = req.body;
  const { email, user_name }: ISignUpBody = signUpData;

  const isUserExist = await User.isUserExist({ email, user_name });

  if (isUserExist) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      'User_name or Email is already exists'
    );
  }

  const result = await User.create(signUpData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User Created Successfully',
    result,
  });
});

export const singUpAdmin = catchAsync(async (req: Request, res: Response) => {

});

export const loginUser = catchAsync(async (req: Request, res: Response) => {});

export const logoutUser = catchAsync(async (req: Request, res: Response) => {});

export const getRefreshToken = catchAsync(
  async (req: Request, res: Response) => {}
);

export const updatePassword = catchAsync(
  async (req: Request, res: Response) => {}
);
