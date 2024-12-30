// src/seed/seed.module.ts
import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { CountryModule } from '@modules/country/country.module';
import { ConfigModule } from '@nestjs/config';
import envConfig from 'src/config/env.config';
import { DatabaseModule } from '../database.module';
import { AddressModule } from '@modules/address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
    DatabaseModule,
    CountryModule,
    AddressModule,
  ],
  providers: [SeedService],
})
export class SeedModule {}
