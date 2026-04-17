import { Router } from 'express';
import { runSeed } from '../controllers/seedController.js';

export const seedRouter = Router();

seedRouter.post('/', runSeed);
