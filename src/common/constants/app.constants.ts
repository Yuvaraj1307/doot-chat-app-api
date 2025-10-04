import { config } from 'dotenv';
config();

// Environment variables
export const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret_key';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '3600s';
export const BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS ? parseInt(process.env.BCRYPT_SALT_ROUNDS) : 10;
export const PASSWORD_MIN_LENGTH = process.env.PASSWORD_MIN_LENGTH ? parseInt(process.env.PASSWORD_MIN_LENGTH) : 8;
export const PASSWORD_MAX_LENGTH = process.env.PASSWORD_MAX_LENGTH ? parseInt(process.env.PASSWORD_MAX_LENGTH) : 32;
export const RATE_LIMIT_TTL = process.env.RATE_LIMIT_TTL ? parseInt(process.env.RATE_LIMIT_TTL) : 60; // in seconds
export const RATE_LIMIT_MAX = process.env.RATE_LIMIT_MAX ? parseInt(process.env.RATE_LIMIT_MAX) : 100;
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
export const DB_NAME = process.env.DB_NAME || 'doot-chat-app';
export const GRAPHQL_PLAYGROUND = process.env.GRAPHQL_PLAYGROUND === 'true';
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['*'];
export const PORT = process.env.PORT || 4000;

// Application constants
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const PUB_SUB = 'PUB_SUB';
