import { Schema, model } from 'mongoose';
const skillPointSchema = new Schema({
    label: { type: String, required: true },
    score: { type: Number, required: true },
    color: { type: String, required: true },
}, { _id: false });
const progressCardSchema = new Schema({
    label: { type: String, required: true },
    value: { type: String, required: true },
    note: { type: String, required: true },
    tone: { type: String, required: true },
    icon: { type: String, required: true },
}, { _id: false });
const recommendationSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    cta: { type: String, required: true },
    tone: { type: String, required: true },
    emoji: { type: String, required: true },
    highlights: { type: [String], default: [] },
    footer: { type: String, required: true },
}, { _id: false });
const subjectBreakdownSchema = new Schema({
    label: { type: String, required: true },
    value: { type: Number, required: true },
    color: { type: String, required: true },
}, { _id: false });
const dashboardSummarySchema = new Schema({
    childId: { type: Schema.Types.ObjectId, ref: 'ChildProfile', required: true, unique: true },
    childSlug: { type: String, required: true, unique: true, trim: true },
    childName: { type: String, required: true, trim: true },
    ageBand: { type: String, required: true, trim: true },
    avatarEmoji: { type: String, required: true, trim: true },
    learningStyle: { type: String, required: true, trim: true },
    focusAnimal: { type: String, required: true, trim: true },
    currentStrength: { type: String, required: true, trim: true },
    currentScore: { type: Number, required: true },
    confidence: { type: Number, required: true },
    completionRate: { type: Number, required: true },
    weeklyStars: { type: Number, required: true },
    nextMilestone: { type: String, required: true, trim: true },
    skillPoints: { type: [skillPointSchema], default: [] },
    progressCards: { type: [progressCardSchema], default: [] },
    strengths: { type: [String], default: [] },
    weakAreas: { type: [String], default: [] },
    sparkMoments: { type: [String], default: [] },
    recommendedActivities: { type: [recommendationSchema], default: [] },
    parentActions: { type: [String], default: [] },
    weeklyTrend: { type: [Number], default: [] },
    subjectBreakdown: { type: [subjectBreakdownSchema], default: [] },
}, {
    timestamps: true,
});
export const DashboardSummary = model('DashboardSummary', dashboardSummarySchema);
