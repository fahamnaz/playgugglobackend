import mongoose from 'mongoose';
import { ChildProfile } from '../models/ChildProfile.js';
function slugify(input) {
    return input
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
async function findChildByIdentifier(identifier) {
    if (mongoose.Types.ObjectId.isValid(identifier)) {
        const byId = await ChildProfile.findById(identifier).lean();
        if (byId)
            return byId;
    }
    return ChildProfile.findOne({ slug: identifier }).lean();
}
function readParam(param) {
    if (Array.isArray(param))
        return param[0];
    return param;
}
export async function listChildren(_req, res) {
    const children = await ChildProfile.find().sort({ createdAt: -1 }).lean();
    res.json({ success: true, data: children });
}
export async function getChild(req, res) {
    const identifier = readParam(req.params.id);
    if (!identifier) {
        res.status(400);
        throw new Error('Child identifier is required');
    }
    const child = await findChildByIdentifier(identifier);
    if (!child) {
        res.status(404);
        throw new Error('Child profile not found');
    }
    res.json({ success: true, data: child });
}
export async function createChild(req, res) {
    const { childName, parentEmail, ageBand, preferredModality, interests = [], goals = [], confidence = 0, } = req.body ?? {};
    if (!childName || !parentEmail || !ageBand || !preferredModality) {
        res.status(400);
        throw new Error('childName, parentEmail, ageBand, and preferredModality are required');
    }
    const baseSlug = slugify(`${childName}-${ageBand}`);
    let slug = baseSlug || `child-${Date.now()}`;
    let suffix = 1;
    while (await ChildProfile.exists({ slug })) {
        suffix += 1;
        slug = `${baseSlug}-${suffix}`;
    }
    const child = await ChildProfile.create({
        slug,
        childName,
        parentEmail,
        ageBand,
        preferredModality,
        interests,
        goals,
        confidence,
    });
    res.status(201).json({ success: true, data: child });
}
