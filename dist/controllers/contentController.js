import { MathEquation } from '../models/MathEquation.js';
import { Planet } from '../models/Planet.js';
import { SignLevel } from '../models/SignLevel.js';
import { SpeechLevel } from '../models/SpeechLevel.js';
import { WordChallenge } from '../models/WordChallenge.js';
export async function listWords(_req, res) {
    const words = await WordChallenge.find().sort({ order: 1 }).lean();
    res.json({ success: true, data: words });
}
export async function listMathEquations(_req, res) {
    const mathEquations = await MathEquation.find().sort({ order: 1 }).lean();
    res.json({ success: true, data: mathEquations });
}
export async function listSpeechLevels(_req, res) {
    const speechLevels = await SpeechLevel.find().sort({ id: 1 }).lean();
    res.json({ success: true, data: speechLevels });
}
export async function listSignLevels(_req, res) {
    const signLevels = await SignLevel.find().sort({ id: 1 }).lean();
    res.json({ success: true, data: signLevels });
}
export async function listPlanets(_req, res) {
    const planets = await Planet.find().sort({ order: 1 }).lean();
    res.json({ success: true, data: planets });
}
