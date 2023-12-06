import { Schema } from "mongoose";

export interface IProfile extends Document {
    first_name:string;
    last_name:string;
    avatar: {
        public_id: string;
        url:string;
    },
    date_of_birth:Date;
    contact_no:string;
    emergency_contact_no?:string;
    address:{
        street:string;
        zip:string;
    },
    educational_certificates?: {
        degree:string;
        passed_year:number;
        duration: string;
        cgpa:string;
        institution:string;
    }[],
    certifications?:{
        name:string;
        institution: string;
        duration:string;
    },
    enrolled_courses?:{
        course:Schema.Types.ObjectId;
        is_completed:boolean;
    }[]
}

