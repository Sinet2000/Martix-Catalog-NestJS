// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envConfig from './config/env.config';
import { DatabaseModule } from './database/database.module';
import { LoggerService } from './logger/logger.service';
import { CountryModule } from './modules/country/country.module';
import { AddressModule } from './modules/address/address.module';
// import { MessagingModule } from './modules/messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
    DatabaseModule,
    CountryModule,
    AddressModule,
    // MessagingModule,
  ],
  providers: [LoggerService],
})
export class AppModule {}
