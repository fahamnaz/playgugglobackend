import mongoose from 'mongoose';
import { DashboardSummary } from '../models/DashboardSummary.js';

export async function getDashboardByChildIdentifier(identifier: string) {
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    const byObjectId = await DashboardSummary.findOne({ childId: identifier }).lean();
    if (byObjectId) return byObjectId;
  }

  return DashboardSummary.findOne({ childSlug: identifier }).lean();
}
