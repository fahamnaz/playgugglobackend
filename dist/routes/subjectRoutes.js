import { Router } from 'express';
import { getSubject, listSubjects } from '../controllers/subjectController.js';
export const subjectRouter = Router();
subjectRouter.get('/', listSubjects);
subjectRouter.get('/:id', getSubject);
