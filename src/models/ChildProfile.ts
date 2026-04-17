import { Schema, model } from 'mongoose';

const childProfileSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    childName: { type: String, required: true, trim: true },
    parentEmail: { type: String, required: true, trim: true, lowercase: true },
    ageBand: { type: String, required: true, trim: true },
    preferredModality: { type: String, required: true, trim: true },
    interests: { type: [String], default: [] },
    goals: { type: [String], default: [] },
    confidence: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

export const ChildProfile = model('ChildProfile', childProfileSchema);
