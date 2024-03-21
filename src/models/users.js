import mongoose from "mongoose";
import { Schema } from 'mongoose';

    const userSchema = new Schema({
        username: {
            type: String,
            required: [true, "Please provide username"],
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Please provide email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
        },
        // isVerified: {
        //     type: Boolean,
        //     default: false,
        // },
        // isAdmin: {
        //     type: Boolean,
        //     default: false,
        // },
        // forgotPasswordToken: String,
        // forgotPasswordTokenExpiry: Date,
        // verifyToken: String,
        // verifyTokenExpiry: Date,
    });
    
export const Users = mongoose.models.Users || mongoose.model('Users', userSchema);
