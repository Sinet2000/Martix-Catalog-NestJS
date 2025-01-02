import { Module } from '@nestjs/common';
import { FileManagementController } from './file-management.controller';

@Module({
  controllers: [FileManagementController]
})
export class FileManagementModule {}
