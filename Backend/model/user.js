import { Schema, model} from 'mongoose';
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
            data: Buffer,
            contentType: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// validation with joi

const User = model('User', userSchema);
export default User;