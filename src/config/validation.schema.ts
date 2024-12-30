// src/config/validation.schema.ts
import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3000),

  // MongoDB
  MONGODB_URI: Joi.string().uri().required(),

  // RabbitMQ
  // RABBITMQ_URL: Joi.string().uri().required(),

  // (Optional) Postgres
  //   POSTGRES_HOST: Joi.string().default('localhost'),
  //   POSTGRES_PORT: Joi.number().default(5432),
  //   POSTGRES_USER: Joi.string().default('postgres'),
  //   POSTGRES_PASSWORD: Joi.string().default(''),
  //   POSTGRES_DB: Joi.string().default('postgres'),

  //   // (Optional) JWT
  //   JWT_SECRET: Joi.string().required(),
  //   JWT_EXPIRES_IN: Joi.string().default('1d'),

  //   // (Optional) Email / SMTP
  //   SMTP_HOST: Joi.string().default('smtp.mailtrap.io'),
  //   SMTP_PORT: Joi.number().default(2525),
  //   SMTP_USER: Joi.string().allow(''),
  //   SMTP_PASS: Joi.string().allow(''),
});
