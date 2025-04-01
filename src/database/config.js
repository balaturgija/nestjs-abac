const env = process.env.ENVIRONMENT || 'local';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const envConfig = require('dotenv').config({
  path: `.env.${env}`,
});

const config = {
  local: {
    username: envConfig.parsed.DB_USERNAME,
    password: envConfig.parsed.DB_PASSWORD,
    database: envConfig.parsed.DB_NAME,
    host: envConfig.parsed.DB_HOST,
    dialect: 'postgres',
  },
  development: {
    username: envConfig.parsed.DB_USERNAME,
    password: envConfig.parsed.DB_PASSWORD,
    database: envConfig.parsed.DB_NAME,
    host: envConfig.parsed.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: envConfig.parsed.DB_USERNAME,
    password: envConfig.parsed.DB_PASSWORD,
    database: envConfig.parsed.DB_NAME,
    host: envConfig.parsed.DB_HOST,
    dialect: 'postgres',
  },
};

module.exports = config[env];
