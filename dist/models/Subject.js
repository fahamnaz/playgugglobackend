import { Schema, model } from 'mongoose';
const subjectGameSchema = new Schema({
    id: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    route: { type: String, trim: true },
    externalUrl: { type: String, trim: true },
    status: { type: String, enum: ['ready', 'coming-soon'], required: true },
}, { _id: false });
const subjectSchema = new Schema({
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    emoji: { type: String, required: true, trim: true },
    accent: { type: String, required: true, trim: true },
    shadow: { type: String, required: true, trim: true },
    textStroke: { type: String, required: true, trim: true },
    mascotPrompt: { type: String, required: true, trim: true },
    games: { type: [subjectGameSchema], default: [] },
}, {
    timestamps: true,
});
export const Subject = model('Subject', subjectSchema);
