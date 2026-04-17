import mongoose from 'mongoose';
import { env } from './env.js';
const readyStateLabels = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
};
export async function connectToDatabase() {
    await mongoose.connect(env.mongoUri, {
        dbName: env.mongoDbName,
    });
}
export async function disconnectFromDatabase() {
    await mongoose.disconnect();
}
export function getDatabaseStatus() {
    return {
        readyState: mongoose.connection.readyState,
        status: readyStateLabels[mongoose.connection.readyState] ?? 'unknown',
        dbName: mongoose.connection.name || env.mongoDbName,
        host: mongoose.connection.host || null,
    };
}
