import dotenv from 'dotenv';

dotenv.config();

export const config = {
    development: {
        username: process.env.DB_USERNAME,
        database: process.env.DB_NAME || 'developmentDB',
        host: process.env.SERVER_HOST || 'localhost',
        port: process.env.SERVER_PORT || 3001,
    }
};

