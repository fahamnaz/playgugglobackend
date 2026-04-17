import cors from 'cors';
import express from 'express';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFound.js';
import { apiRouter } from './routes/index.js';
export function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.get('/', (_req, res) => {
        res.json({
            success: true,
            message: 'Play Gugglu fake backend is running',
        });
    });
    app.use('/api', apiRouter);
    app.use(notFoundHandler);
    app.use(errorHandler);
    return app;
}
