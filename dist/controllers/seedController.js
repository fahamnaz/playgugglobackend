import { seedDatabase } from '../services/seedService.js';
export async function runSeed(_req, res) {
    if (process.env.NODE_ENV === 'production') {
        res.status(403);
        throw new Error('Manual seed route is disabled in production');
    }
    const counts = await seedDatabase();
    res.json({
        success: true,
        message: 'Database seeded successfully',
        counts,
    });
}
