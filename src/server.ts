import { createApp } from './app.js';
import { connectToDatabase } from './config/database.js';
import { env } from './config/env.js';
import { seedDatabase } from './services/seedService.js';

async function startServer() {
  await connectToDatabase();

  if (env.seedOnStart) {
    await seedDatabase();
  }

  const app = createApp();

  app.listen(env.port, () => {
    console.log(`Backend listening on http://localhost:${env.port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start backend:', error);
  process.exit(1);
});
