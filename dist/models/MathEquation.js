import { Schema, model } from 'mongoose';
const mathEquationSchema = new Schema({
    key: { type: String, required: true, unique: true, trim: true },
    level: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    elements: { type: [String], required: true },
    order: { type: Number, required: true },
}, {
    timestamps: true,
});
export const MathEquation = model('MathEquation', mathEquationSchema);
