import { CreateAddressDto } from '@app/modules/address/dto/create-address.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CommunicationDto } from './communication.dto';

export class CreatePersonDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: '1990-01-01' })
  @IsDateString()
  birthDate: Date;

  @ApiProperty({ type: [CreateAddressDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAddressDto)
  addresses: CreateAddressDto[];

  @ApiProperty({ type: CommunicationDto })
  @ValidateNested()
  @Type(() => CommunicationDto)
  communication: CommunicationDto;
}
