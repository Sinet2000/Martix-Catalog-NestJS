import { IsOptional, IsString, IsEnum } from 'class-validator';
import { AddressType } from '../schemas/address.schema';

export class UpdateAddressDto {
  @IsOptional()
  @IsEnum(AddressType, {
    message: `type must be one of: ${Object.values(AddressType).join(', ')}`,
  })
  type?: AddressType;

  @IsOptional()
  @IsString()
  street?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsString()
  country?: string; // Country ID as ObjectId string
}
