import { getDatabaseStatus } from '../config/database.js';
export function getHealth(_req, res) {
    res.json({
        success: true,
        message: 'Backend is healthy',
        serverTime: new Date().toISOString(),
        database: getDatabaseStatus(),
    });
}
