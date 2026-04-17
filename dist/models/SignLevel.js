import { Schema, model } from 'mongoose';
const signLevelSchema = new Schema({
    id: { type: String, required: true, unique: true, trim: true },
    sign: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    meaning: { type: String, required: true, trim: true },
    emoji: { type: String, required: true, trim: true },
    instruction: { type: String, required: true, trim: true },
}, {
    timestamps: true,
});
export const SignLevel = model('SignLevel', signLevelSchema);
