import mongoose from 'mongoose';
import { ChildProfile } from '../models/ChildProfile.js';
import { Notification } from '../models/Notification.js';
async function resolveChild(identifier) {
    if (!identifier)
        return null;
    if (mongoose.Types.ObjectId.isValid(identifier)) {
        const byId = await ChildProfile.findById(identifier).lean();
        if (byId)
            return byId;
    }
    return ChildProfile.findOne({ slug: identifier }).lean();
}
export async function listNotifications(req, res) {
    const { childId } = req.query;
    const filter = {};
    if (typeof childId === 'string' && childId.length > 0) {
        const child = await resolveChild(childId);
        if (child) {
            filter.childId = child._id;
        }
        else {
            filter.childSlug = childId;
        }
    }
    const notifications = await Notification.find(filter).sort({ createdAt: -1 }).lean();
    res.json({ success: true, data: notifications });
}
export async function createNotification(req, res) {
    const { childId, gameKey, title, detail, tone = 'info', emoji = '🌟' } = req.body ?? {};
    if (!title || !detail) {
        res.status(400);
        throw new Error('title and detail are required');
    }
    const child = typeof childId === 'string' ? await resolveChild(childId) : null;
    const notification = await Notification.create({
        childId: child?._id,
        childSlug: child?.slug ?? (typeof childId === 'string' ? childId : undefined),
        gameKey,
        title,
        detail,
        tone,
        emoji,
    });
    res.status(201).json({ success: true, data: notification });
}
