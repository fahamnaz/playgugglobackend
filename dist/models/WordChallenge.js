import { Schema, model } from 'mongoose';
const wordChallengeSchema = new Schema({
    id: { type: String, required: true, unique: true, trim: true },
    word: { type: String, required: true, trim: true, uppercase: true },
    hint: { type: String, required: true, trim: true },
    imageEmoji: { type: String, required: true, trim: true },
    order: { type: Number, required: true },
}, {
    timestamps: true,
});
export const WordChallenge = model('WordChallenge', wordChallengeSchema);
