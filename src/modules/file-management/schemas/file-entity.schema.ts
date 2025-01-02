import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FileEntityDocument = HydratedDocument<FileEntity>;

export enum FileType {
  FEATURED = 'featured',
  GALLERY = 'gallery',
  DOCUMENT = 'document',
}

export interface FileMetadata {
  resolution?: string; // For images (e.g., "1920x1080")
  description?: string; // Description of the file
  tags?: string[]; // Tags for categorization
  uploadedBy?: string; // User who uploaded the file
}

@Schema({ timestamps: true })
export class FileEntity extends Document {
  @Prop({ enum: FileType, required: true })
  type: FileType; // e.g., "featured", "gallery", "document"

  @Prop({ required: true })
  relatedId: string; // ID of the related entity (e.g., product)

  @Prop({ required: true })
  filename: string;

  @Prop({ required: true })
  path: string;

  @Prop({ type: Object, default: {} })
  additionalData?: FileMetadata; // File metadata
}

export const FileSchema = SchemaFactory.createForClass(FileEntity);
