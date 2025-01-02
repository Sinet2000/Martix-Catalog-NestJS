// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './utils/logger/logger.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
// import * as helmet from 'helmet';
import * as cors from 'cors';
import { GlobalExceptionFilter } from '@common/filters/global-exception.filter';
import { LoggingInterceptor } from '@common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  const logger = app.get(LoggerService);

  // Setup CORS
  app.use(cors());
  // Basic security headers
  // app.use(helmet());

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API documentation for the application')
    .setVersion('1.0')
    .addTag('addresses')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Start application
  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
    logger.info(`Swagger docs available at /api/docs`);
  });
}

bootstrap();
