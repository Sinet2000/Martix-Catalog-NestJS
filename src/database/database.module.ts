// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import envConfig from 'src/config/env.config';
import { CountryModule } from '@modules/country/country.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: envConfig().mongoUri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    CountryModule,
  ],
  exports: [],
})
export class DatabaseModule {}
