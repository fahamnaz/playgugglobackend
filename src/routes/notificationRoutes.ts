import { Router } from 'express';
import { createNotification, listNotifications } from '../controllers/notificationController.js';

export const notificationRouter = Router();

notificationRouter.get('/', listNotifications);
notificationRouter.post('/', createNotification);
