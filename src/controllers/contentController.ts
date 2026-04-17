import type { Request, Response } from 'express';
import { MathEquation } from '../models/MathEquation.js';
import { Planet } from '../models/Planet.js';
import { SignLevel } from '../models/SignLevel.js';
import { SpeechLevel } from '../models/SpeechLevel.js';
import { WordChallenge } from '../models/WordChallenge.js';

export async function listWords(_req: Request, res: Response) {
  const words = await WordChallenge.find().sort({ order: 1 }).lean();
  res.json({ success: true, data: words });
}

export async function listMathEquations(_req: Request, res: Response) {
  const mathEquations = await MathEquation.find().sort({ order: 1 }).lean();
  res.json({ success: true, data: mathEquations });
}

export async function listSpeechLevels(_req: Request, res: Response) {
  const speechLevels = await SpeechLevel.find().sort({ id: 1 }).lean();
  res.json({ success: true, data: speechLevels });
}

export async function listSignLevels(_req: Request, res: Response) {
  const signLevels = await SignLevel.find().sort({ id: 1 }).lean();
  res.json({ success: true, data: signLevels });
}

export async function listPlanets(_req: Request, res: Response) {
  const planets = await Planet.find().sort({ order: 1 }).lean();
  res.json({ success: true, data: planets });
}
