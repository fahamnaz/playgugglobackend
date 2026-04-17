import type { Request, Response } from 'express';
import { Subject } from '../models/Subject.js';

export async function listSubjects(_req: Request, res: Response) {
  const subjects = await Subject.find().sort({ name: 1 }).lean();
  res.json({ success: true, data: subjects });
}

export async function getSubject(req: Request, res: Response) {
  const subject = await Subject.findOne({ id: req.params.id }).lean();

  if (!subject) {
    res.status(404);
    throw new Error('Subject not found');
  }

  res.json({ success: true, data: subject });
}
