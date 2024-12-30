// src/config/env.config.ts

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/local-db',
  rabbitMqUrl: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
});
