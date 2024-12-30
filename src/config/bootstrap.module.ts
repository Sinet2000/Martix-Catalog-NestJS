import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envConfig from './env.config';
import { validationSchema } from './validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      // Make environment variables available globally
      isGlobal: true,

      // Load your custom env config
      load: [envConfig],

      // Validate environment variables
      validationSchema,

      envFilePath: [
        // 1) Attempt to load .env.<NODE_ENV> (e.g. .env.development, .env.production)
        `.env.${process.env.NODE_ENV}`,
        // 2) Fallback to default .env
        '.env',
      ],
      // envFilePath: ['.env', '.env.development', '.env.production'],
    }),
  ],
})
export class BootstrapModule {}
