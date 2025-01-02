import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(255, { message: 'Product name must not exceed 255 characters' })
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(512, {
    message: 'Product description must not exceed 512 characters',
  })
  description?: string;

  @IsNumber()
  @IsPositive({ message: 'Price must be a positive number' })
  price: number;

  @IsString()
  @MaxLength(50, { message: 'SKU must not exceed 50 characters' })
  sku: string;

  @IsOptional()
  @ArrayNotEmpty({ message: 'Category IDs must not be empty' })
  @ArrayUnique({ message: 'Duplicate category IDs are not allowed' })
  @IsMongoId({
    each: true,
    message: 'Each category ID must be a valid MongoDB ID',
  })
  categoryIds?: string[];

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  stock?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => Object)
  specifications?: Record<string, any>;
}
