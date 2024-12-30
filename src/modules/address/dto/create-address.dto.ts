import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AddressType } from '../schemas/address.schema';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsEnum(AddressType, {
    message: `type must be one of: ${Object.values(AddressType).join(', ')}`,
  })
  type: AddressType;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @IsNotEmpty()
  @IsString()
  country: string; // Country ID as ObjectId string
}
