import { Schema, model } from 'mongoose';

const planetSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    kind: { type: String, enum: ['star', 'planet'], required: true },
    order: { type: Number, required: true },
    color: { type: String, required: true, trim: true },
    size: { type: Number, required: true },
    orbitRadius: { type: Number, required: true },
    orbitSpeed: { type: Number, required: true },
    facts: { type: [String], default: [] },
    svg: { type: String, default: '' },
  },
  {
    timestamps: true,
  },
);

export const Planet = model('Planet', planetSchema);
