import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AddressType } from '../schemas/address.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({ example: 'personal', enum: AddressType })
  @IsNotEmpty()
  @IsEnum(AddressType)
  type: AddressType;

  @ApiProperty({ example: '123 Main St' })
  @IsNotEmpty()
  @IsString()
  street: string;

  @ApiProperty({ example: 'Sample City' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ example: '12345' })
  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @ApiProperty({
    example: '64b2f82e72f1a3c1c28e4567',
    description: 'Country ID',
  })
  @IsNotEmpty()
  @IsString()
  country: string; // Country ID as a string
}
