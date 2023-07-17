import mongoose from "mongoose";
import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
    image: {
        type: Buffer,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Image = model('Image', imageSchema);