import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsEnum,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CommunicationType } from '../schemas/communication.schema';

export class MobileDto {
  @ApiProperty({ example: 'personal', enum: CommunicationType })
  @IsNotEmpty()
  @IsEnum(CommunicationType)
  type: CommunicationType;

  @ApiProperty({ example: '+1234567890' })
  @IsNotEmpty()
  @IsString()
  number: string;
}

export class EmailDto {
  @ApiProperty({ example: 'personal', enum: CommunicationType })
  @IsNotEmpty()
  @IsEnum(CommunicationType)
  type: CommunicationType;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsNotEmpty()
  @IsString()
  email: string;
}

export class CommunicationDto {
  @ApiProperty({ type: [MobileDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MobileDto)
  mobiles: MobileDto[];

  @ApiProperty({ type: [EmailDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EmailDto)
  emails: EmailDto[];
}
