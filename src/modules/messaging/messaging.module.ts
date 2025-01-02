// src/modules/messaging/messaging.module.ts
import { Module } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { LoggerService } from '@app/utils/logger/logger.service';

@Module({
  providers: [MessagingService, LoggerService],
  exports: [MessagingService],
})
export class MessagingModule {}
