// src/config/env.config.ts

export default () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/local-db',
  rabbitMqUrl: process.env.RABBITMQ_URL || 'amqp://localhost:5672',

  // postgres: {
  //   host: process.env.POSTGRES_HOST || 'localhost',
  //   port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  //   user: process.env.POSTGRES_USER || 'postgres',
  //   password: process.env.POSTGRES_PASSWORD || '',
  //   database: process.env.POSTGRES_DB || 'postgres',
  // },

  // // JWT (if needed)
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  //   expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  // },

  // // SMTP (if needed)
  // smtp: {
  //   host: process.env.SMTP_HOST,
  //   port: parseInt(process.env.SMTP_PORT, 10),
  //   user: process.env.SMTP_USER,
  //   pass: process.env.SMTP_PASS,
  // },
});
