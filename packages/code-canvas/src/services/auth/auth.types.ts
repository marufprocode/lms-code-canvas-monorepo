import { IUser } from "../user/user.types";

export interface ILoginResponse {
    message: string;
    status: boolean;
    credentials: {
        user: IUser;
        tokens: {
            access: {
                token: string;
                expires: string;
            };
            refresh: {
                token: string;
                expires: string;
            };
        };
    };
}
