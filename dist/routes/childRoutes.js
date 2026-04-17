import { Router } from 'express';
import { createChild, getChild, listChildren } from '../controllers/childController.js';
export const childRouter = Router();
childRouter.get('/', listChildren);
childRouter.get('/:id', getChild);
childRouter.post('/', createChild);
