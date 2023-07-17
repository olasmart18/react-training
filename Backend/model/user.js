import mongoose from "mongoose";
import { Schema, model} from mongoose;
// import Joi from "joi";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: mongoose.Types.ObjectId,
        ref: 'Image',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// validation with joi

const User = model('User', userSchema);
export default User;