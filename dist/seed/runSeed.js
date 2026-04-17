import { connectToDatabase, disconnectFromDatabase } from '../config/database.js';
import { seedDatabase } from '../services/seedService.js';
async function run() {
    await connectToDatabase();
    const counts = await seedDatabase();
    console.log('Seed completed:', counts);
    await disconnectFromDatabase();
}
run().catch(async (error) => {
    console.error('Seed failed:', error);
    await disconnectFromDatabase();
    process.exit(1);
});
