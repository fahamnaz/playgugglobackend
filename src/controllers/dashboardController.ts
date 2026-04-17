import type { Request, Response } from 'express';
import { getDashboardByChildIdentifier } from '../services/dashboardService.js';

export async function getDashboard(req: Request, res: Response) {
  const identifier = Array.isArray(req.params.childId) ? req.params.childId[0] : req.params.childId;

  if (!identifier) {
    res.status(400);
    throw new Error('Child identifier is required');
  }

  const dashboard = await getDashboardByChildIdentifier(identifier);

  if (!dashboard) {
    res.status(404);
    throw new Error('Dashboard summary not found for the given child');
  }

  res.json({ success: true, data: dashboard });
}
