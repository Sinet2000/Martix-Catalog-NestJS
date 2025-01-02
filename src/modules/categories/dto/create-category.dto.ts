import {
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MaxLength(255, { message: 'Category name must not exceed 255 characters' })
  @IsNotEmpty({ message: 'Category name is required' })
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(512, {
    message: 'Category description must not exceed 512 characters',
  })
  description?: string;

  @IsOptional()
  @IsMongoId({ message: 'Parent category ID must be a valid MongoDB ID' })
  parentCategoryId?: string;
}
