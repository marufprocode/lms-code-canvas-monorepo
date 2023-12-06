import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './user.interface';
import bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../../../config';

const userSchema = new Schema<IUser, IUserModel>(
  {
    user_name: { type: String, required: true, unique:true },
    email: { type: String, required: true, unique:true },
    role: { type: String, required: true },
    password: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

userSchema.static(
  'isPasswordMatched',
  function isPasswordMatched(
    password: string | Buffer,
    savedPassword: string | Buffer
  ) {
    return bcrypt.compare(password, savedPassword as string);
  }
);

userSchema.statics.isUserExist = async function (
  {user_name, email}: {email?:string, user_name?:string}
): Promise<boolean> {
  const query: any = { $or: [] };

  if (user_name) {
    query.$or.push({ user_name });
  }

  if (email) {
    query.$or.push({ email });
  }

  const result = await User.findOne(query);
  return !!result;
};


userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isNew) {
    const password = user.password;
    user.password = await bcrypt.hash(password, Number(BCRYPT_SALT_ROUNDS));
  }
  next();
});

const User = model<IUser, IUserModel>('User', userSchema);

export default User;
