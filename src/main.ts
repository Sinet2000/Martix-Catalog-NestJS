// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as helmet from 'helmet';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(LoggerService);

  // Setup CORS
  app.use(cors());
  // Basic security headers
  // app.use(helmet());

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('My Enterprise API')
    .setDescription('API documentation for the Node.js enterprise application')
    .setVersion('1.0')
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
