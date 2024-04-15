import { verify } from "crypto";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : [true , "please provide a usename"],
        unique : true,
        },

    email : {
        type : String,
        required : [true , "please provide a email"],
        unique : true,
       },
       
    password : {
        type : String,
        required : [true , "please provide a password"],
    },
    
    isVerified : {
        type : Boolean,
        default: false,
    },
    isAdmin : {
        type: Boolean,
        default : false,
    },

    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date,
})

const User =  mongoose.model("user" , userSchema);

export default User;