/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotImplementedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileEntity, FileEntityDocument } from './schemas/file-entity.schema';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';
// import { BlobServiceClient } from '@azure/storage-blob';
// import * as AWS from 'aws-sdk';

@Injectable()
export class FileManagementService {
  private rootUploadDir: string;
  private storageType: string;
  private cloudContainer: string;

  constructor(
    @InjectModel(FileEntity.name)
    private readonly fileModel: Model<FileEntityDocument>,
    private readonly configService: ConfigService,
  ) {
    this.rootUploadDir = path.resolve(
      process.cwd(),
      this.configService.get<string>('UPLOAD_DIR') || 'uploads',
    );
    this.storageType =
      this.configService.get<string>('STORAGE_TYPE') || 'local';
    this.cloudContainer = this.configService.get<string>(
      'CLOUD_STORAGE_CONTAINER',
    );
  }

  async uploadFile(
    file: Express.Multer.File,
    type: string,
    relatedId: string,
    additionalData?: Record<string, any>,
  ) {
    if (!file) throw new BadRequestException('No file provided');

    // Validate file type
    const validMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        'Invalid file type. Only images are allowed.',
      );
    }

    // Determine subdirectory based on type
    const subDir = path.join(this.rootUploadDir, type);
    let filePath: string;

    if (this.storageType === 'local') {
      filePath = await this.saveFileLocally(file, subDir);
    } else if (this.storageType === 'azure') {
      filePath = await this.uploadToAzure(file, type);
    } else if (this.storageType === 'aws') {
      filePath = await this.uploadToAWS(file, type);
    } else {
      throw new InternalServerErrorException('Invalid storage type');
    }

    // Save metadata to database
    const newFile = new this.fileModel({
      type,
      relatedId,
      filename: file.originalname,
      path: filePath,
      additionalData: additionalData || {},
    });

    return newFile.save();
  }

  async deleteFile(id: string) {
    const file = await this.fileModel.findById(id);
    if (!file) throw new BadRequestException('File not found');

    if (this.storageType === 'local') {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    } else {
      // Add cloud-specific delete logic here
    }

    return this.fileModel.findByIdAndDelete(id);
  }

  async getFile(id: string): Promise<FileEntityDocument> {
    const file = await this.fileModel.findById(id);
    if (!file) throw new BadRequestException('File not found');
    return file;
  }

  private async saveFileLocally(
    file: Express.Multer.File,
    subDir: string,
  ): Promise<string> {
    const filename = `${Date.now()}-${file.originalname}`;
    const filePath = path.join(subDir, filename);

    if (!fs.existsSync(subDir)) {
      fs.mkdirSync(subDir, { recursive: true });
    }

    fs.writeFileSync(filePath, file.buffer);
    return filePath;
  }

  private async uploadToAzure(
    file: Express.Multer.File,
    subDir: string,
  ): Promise<string> {
    throw new NotImplementedException();
    // const connectionString = this.configService.get<string>(
    //   'AZURE_STORAGE_CONNECTION_STRING',
    // );
    // const blobServiceClient =
    //   BlobServiceClient.fromConnectionString(connectionString);
    // const containerClient = blobServiceClient.getContainerClient(
    //   this.cloudContainer,
    // );
    // const blobName = `${subDir}/${Date.now()}-${file.originalname}`;
    // const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    // await blockBlobClient.uploadData(file.buffer, {
    //   blobHTTPHeaders: { blobContentType: file.mimetype },
    // });
    // return blockBlobClient.url;
  }

  private async uploadToAWS(
    file: Express.Multer.File,
    subDir: string,
  ): Promise<string> {
    throw new NotImplementedException();
    // const s3 = new AWS.S3({
    //   accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
    //   secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
    //   region: this.configService.get<string>('AWS_REGION'),
    // });
    // const params = {
    //   Bucket: this.cloudContainer,
    //   Key: `${subDir}/${Date.now()}-${file.originalname}`,
    //   Body: file.buffer,
    //   ContentType: file.mimetype,
    // };
    // const { Location } = await s3.upload(params).promise();
    // return Location;
  }
}
