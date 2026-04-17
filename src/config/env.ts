import dotenv from 'dotenv';

dotenv.config();

function readEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function readBoolean(name: string, fallback = false) {
  const value = process.env[name];
  if (value == null) return fallback;
  return value.toLowerCase() === 'true';
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  mongoUri: readEnv('MONGODB_URI'),
  mongoDbName: readEnv('MONGODB_DB_NAME', 'play_gugglu'),
  seedOnStart: readBoolean('SEED_ON_START', false),
};
