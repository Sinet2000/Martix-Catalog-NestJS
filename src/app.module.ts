// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envConfig from './config/env.config';
import { DatabaseModule } from '@database/database.module';
import { LoggerService } from './logger/logger.service';
import { CountryModule } from '@modules/country/country.module';
import { AddressModule } from '@modules/address/address.module';
import { BootstrapModule } from './config/bootstrap.module';
// import { MessagingModule } from './modules/messaging/messaging.module';
import { PersonModule } from './modules/person/person.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
    DatabaseModule,
    CountryModule,
    AddressModule,
    BootstrapModule,
    PersonModule,
    // MessagingModule,
  ],
  providers: [LoggerService],
})
export class AppModule {}
