import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileManagementService } from './file-management.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file-management')
export class FileManagementController {
  constructor(private readonly fileManagementService: FileManagementService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body('type') type: string,
    @Body('relatedId') relatedId: string,
    @Body('additionalData') additionalData?: string,
  ) {
    const parsedData = additionalData ? JSON.parse(additionalData) : undefined;
    return this.fileManagementService.uploadFile(
      file,
      type,
      relatedId,
      parsedData,
    );
  }

  @Delete(':id')
  async deleteFile(@Param('id') id: string) {
    return this.fileManagementService.deleteFile(id);
  }

  @Get(':id')
  async getFile(@Param('id') id: string) {
    return this.fileManagementService.getFile(id);
  }
}
