import { Expose } from 'class-transformer';

export class PaginatedResponseDto<T> {
  @Expose()
  data: T[];

  @Expose()
  totalCount: number;

  @Expose()
  page: number;

  @Expose()
  pageSize: number;

  @Expose()
  totalPages: number;

  @Expose()
  hasNextPage: boolean;

  @Expose()
  hasPrevPage: boolean;

  @Expose()
  filters?: string;

  @Expose()
  sorts?: string;
}
