import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsString()
  sorts?: string; // Example: "price,-createdAt"

  @IsOptional()
  @IsString()
  filters?: string; // Example: "price>100,stock>=10"

  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  pageSize?: number = 10;
}
