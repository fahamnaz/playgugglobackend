import { Schema, model } from 'mongoose';
const speechLevelSchema = new Schema({
    id: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    targetWord: { type: String, required: true, trim: true },
    slowPronunciation: { type: String, required: true, trim: true },
    instruction: { type: String, required: true, trim: true },
    mascotIntro: { type: String, required: true, trim: true },
    mascotSuccess: { type: String, required: true, trim: true },
    emoji: { type: String, required: true, trim: true },
}, {
    timestamps: true,
});
export const SpeechLevel = model('SpeechLevel', speechLevelSchema);
