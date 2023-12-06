import { HydratedDocument, Model, Schema } from 'mongoose';

export enum ENUM_USER_ROLE {
  SUPER_ADMIN = 'superadmin',
  ADMIN = 'admin',
  STUDENT = 'student',
}

export interface IUser extends Document {
  user_name: string;
  role: ENUM_USER_ROLE;
  email: string;
  password: string;
}

export interface IUserModel extends Model<IUser> {
    isPasswordMatched(password: string, savedPassword: string): Promise<boolean>;
    isUserExist(data:{email?:string, user_name?:string}): Promise<boolean>;
}
