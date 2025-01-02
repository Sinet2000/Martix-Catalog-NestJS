import { Expose, Transform } from 'class-transformer';

export class TableProductDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  price: number;

  @Expose()
  stock: number;

  @Expose()
  sku: string;

  @Expose()
  @Transform(({ value }) => value.length) // Show the number of categories
  categoryCount: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
