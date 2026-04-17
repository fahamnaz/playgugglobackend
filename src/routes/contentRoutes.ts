import { Router } from 'express';
import {
  listMathEquations,
  listPlanets,
  listSignLevels,
  listSpeechLevels,
  listWords,
} from '../controllers/contentController.js';

export const contentRouter = Router();

contentRouter.get('/words', listWords);
contentRouter.get('/math-equations', listMathEquations);
contentRouter.get('/speech-levels', listSpeechLevels);
contentRouter.get('/sign-levels', listSignLevels);
contentRouter.get('/planets', listPlanets);
