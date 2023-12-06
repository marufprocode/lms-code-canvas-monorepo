import { ICompany } from "../company/company.types";

export interface IUser {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_pic: string;
    companies: {
        company: ICompany;
        _id: string;
    }[];
    role: string;
    status: string;
    is_deleted: boolean;
    createdAt: string;
    updatedAt: string;
    phone: string;
}