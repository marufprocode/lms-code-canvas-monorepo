import { IUser } from '../user/user.interface';

export type ISignUpBody = Pick<IUser, 'email' | 'password' | 'user_name'>;
