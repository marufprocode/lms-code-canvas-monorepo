import { model, Schema, Document } from 'mongoose';
import { IProfile } from './profile.interface';

// Define the Mongoose schema for the profile
const ProfileSchema = new Schema<IProfile>(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    avatar: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    date_of_birth: { type: Date, required: true },
    contact_no: { type: String, required: true },
    emergency_contact_no: { type: String },
    address: {
      street: { type: String, required: true },
      zip: { type: String, required: true },
    },
    educational_certificates: [
      {
        degree: { type: String, required: true },
        passed_year: { type: Number, required: true },
        duration: { type: String, required: true },
        cgpa: { type: String, required: true },
        institution: { type: String, required: true },
      },
    ],
    certifications: [
      {
        name: { type: String, required: true },
        institution: { type: String, required: true },
        duration: { type: String, required: true },
      },
    ],
    enrolled_courses: [
      {
        course: { type: Schema.Types.ObjectId, ref: 'Course' },
        is_completed: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

// Create the Mongoose model for the profile
const Profile = model<IProfile>('Profile', ProfileSchema);

export default Profile;
