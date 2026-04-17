import { Schema, model } from 'mongoose';

const notificationSchema = new Schema(
  {
    seedKey: { type: String, unique: true, sparse: true, trim: true },
    childId: { type: Schema.Types.ObjectId, ref: 'ChildProfile' },
    childSlug: { type: String, trim: true },
    gameKey: { type: String, trim: true },
    title: { type: String, required: true, trim: true },
    detail: { type: String, required: true, trim: true },
    tone: { type: String, enum: ['success', 'warning', 'info'], default: 'info' },
    emoji: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    updatedAt: false,
  },
);

export const Notification = model('Notification', notificationSchema);
