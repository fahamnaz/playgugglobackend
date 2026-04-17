import type { Request, Response } from 'express';
import { getDatabaseStatus } from '../config/database.js';

export function getHealth(_req: Request, res: Response) {
  res.json({
    success: true,
    message: 'Backend is healthy',
    serverTime: new Date().toISOString(),
    database: getDatabaseStatus(),
  });
}
