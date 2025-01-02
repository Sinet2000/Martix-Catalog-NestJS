// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import envConfig from './config/env.config';
import { DatabaseModule } from '@database/database.module';
import { LoggerService } from './utils/logger/logger.service';
import { CountryModule } from '@modules/country/country.module';
import { AddressModule } from '@modules/address/address.module';
import { BootstrapModule } from './config/bootstrap.module';
// import { MessagingModule } from './modules/messaging/messaging.module';
import { PersonModule } from './modules/person/person.module';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { SearchModule } from './modules/search/search.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { FileManagementService } from './modules/file-management/file-management.service';
import { FileManagementModule } from './modules/file-management/file-management.module';

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
    ProductsModule,
    CategoriesModule,
    SearchModule,
    NotificationsModule,
    FileManagementModule,
    // MessagingModule,
  ],
  providers: [LoggerService, FileManagementService],
})
export class AppModule {}
